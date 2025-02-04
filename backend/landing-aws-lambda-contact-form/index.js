const https = require("https");
const aws = require("aws-sdk");
const ses = new aws.SES({ region: "eu-central-1" });
const { log, error } = console;
const patterns = {
  name: /^[a-z\d\s.@!?()\-+'":;,]+$/gim,
  textarea: /^([a-z\d\s.@!?()\-+'":;,]+)$/gim,
  text: /^([a-z\d\s.@!?()\-+'":;,]+)$/gim,
  phone: /^((\+?\d{1,3})?[\(\- ]?\d{3,5}[\)\- ]?)?(\d[.\- ]?\d)+$/,
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi,
};

const VALIDATION = {
  company_name: [
    {
      isValid: (value) => {
        if (!!value) {
          const regex = new RegExp(patterns.name);
          const isValid = regex.test(value);
          regex.lastIndex = 0;
          return isValid;
        } else {
          return true;
        }
      },
      message: "Forbidden characters in company name.",
    },
  ],
  contact_name: [
    {
      isValid: (value) => !!value,
      message: "Mandarory field.",
    },
    {
      isValid: (value) => value.length > 3,
      message: "Name is too short, minimum 3 characters.",
    },
    {
      isValid: (value) => value.length < 50,
      message: "Textul este prea lung, maxim 50 de caractere sunt permise.",
    },
    {
      isValid: (value) => {
        const regex = new RegExp(patterns.name);
        const isValid = regex.test(value);
        regex.lastIndex = 0;
        return isValid;
      },
      message: "Textul contine caractere interzise.",
    },
  ],
  phone_number: [
    {
      isValid: (value) => !!value,
      message: "Manadatory field.",
    },
    {
      isValid: (value) => value.length >= 9,
      message: "Number is too short, minimum 9 digits.",
    },
    {
      isValid: (value) => value.length <= 10,
      message: "Number is too long, maximum 10 digits.",
    },
    {
      isValid: (value) => {
        const regex = new RegExp(patterns.phone);
        const isValid = regex.test(value);
        regex.lastIndex = 0;
        return isValid;
      },
      message: "Phone number contains forbidden characters.",
    },
  ],
  email: [
    {
      isValid: (value) => {
        if (!!value) {
          const regex = new RegExp(patterns.email);
          const isValid = regex.test(value);
          regex.lastIndex = 0;
          return isValid;
        } else {
          return true;
        }
      },
      message: "Email address contains forbidden characters.",
    },
  ],
  quantity_no: [
    {
      isValid: (value) => !!value,
      message: "Mandatory field.",
    },
  ],
  time_period: [
    {
      isValid: (value) => !!value,
      message: "Mandatory field.",
    },
  ],
  utilization_type: [
    {
      isValid: (value) => !!value.length > 0,
      message: "Mandatory field.",
    },
  ],
  message: [
    {
      isValid: (value) => {
        if (!!value) {
          const regex = new RegExp(patterns.text);
          const isValid = regex.test(value);
          regex.lastIndex = 0;
          return isValid;
        } else {
          return true;
        }
      },
      message: "Message contains forbidden characters.",
    },
  ],
};

const getErrorFields = (form) =>
  Object.keys(form).reduce((acc, key) => {
    if (!VALIDATION[key]) return acc;

    const errorsPerField = VALIDATION[key]
      // get a list of potential errors for each field
      // by running through all the checks
      .map((validation) => ({
        isValid: validation.isValid(form[key]),
        message: validation.message,
      }))
      // only keep the errors
      .filter((errorPerField) => !errorPerField.isValid);

    return { ...acc, [key]: errorsPerField };
  }, {});

const verifyCaptcha = async (url) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      if (res.statusCode < 200 || res.statusCode > 299) {
        return reject(new Error(`HTTP status code ${res.statusCode}`));
      }
      console.log(res.statusCode);
      const body = [];
      res.on("data", (chunk) => body.push(chunk));
      res.on("end", () => {
        const resString = Buffer.concat(body).toString();
        resolve(resString);
      });
    });

    req.on("error", (err) => {
      reject(err);
    });

    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request time out"));
    });

    req.end();
  });
};

const validateData = (userData) => {
  const errorFields = getErrorFields(userData);
  const hasErrors = Object.values(errorFields).flat().length > 0;
  if (hasErrors) {
    error({ errorFields });
  }
  return hasErrors;
};

const getParams = (data) => {
  return {
    Destination: {
      ToAddresses: [
        "paul.alex.serban@gmail.com",
        "contactus.stage@monekymoney.inc",
      ],
    },
    Message: {
      Body: {
        Text: {
          Data: `
You have a mesage from ${data.contact_name}, ${
            data.company_name ? `reprezenting ${data.company_name}` : ""
          }.
${data.message ? `Mesage: ${data.message}` : ""}
Utilization Type: ${data.utilization_type}
Quantity Number: ${data.quantity_no}
Period: ${data.time_period}
Contact info:
- Phone: ${data.phone_number}
${data.email ? `- Email: ${data.email}` : ""}

Confidentiality agreement: ${data.confidentiality_agreement}`,
        },
      },
      Subject: {
        Data: `Message from ${data.contact_name} in the name of ${data.company_name}`,
      },
    },
    Source: "contactus.stage@monekymoney.inc", // Replace with a verified email address
  };
};

exports.handler = async (event) => {
  const { body } = event;
  const formData = JSON.parse(body);
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  console.log({ formData, secretKey });

  try {
    // Verify captcha
    const captchaResponse = await verifyCaptcha(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${formData.recaptchaToken}`
    );
    const jsonResponse = await JSON.parse(captchaResponse);

    if (!jsonResponse.success) {
      error("[ error ] invalid captcha token");
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid captcha token" }),
      };
    }
    console.log({ "[ info ] Google ReCaptcha Response": jsonResponse });

    const hasErrors = validateData(formData);
    if (hasErrors) return;

    const sesParams = getParams(formData);
    console.log({ "[ info ] SES params": sesParams });

    // Send email using SES
    const result = await ses.sendEmail(sesParams).promise();
    log({ "[ info ] SES result": result });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("[ error ]", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error sending email" }),
    };
  }
};
