const aws = require("aws-sdk");
const https = require("https");
const ses = new aws.SES({ region: "eu-central-1" });
const { log, error } = console;
const patterns = {
  name: /^[a-z\d\s\-'_.]{3,50}$/gim,
  message: /^([a-z\d\s.@!?()\-+'":;,]+)$/gim,
  text: /^([a-z\d\s.@!?()\-+'":;,]+)$/gim,
  phone: /^((\+?\d{1,3})?[\(\- ]?\d{3,5}[\)\- ]?)?(\d[.\- ]?\d)+$/,
  email:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi,
};

async function verifyCaptcha(url) {
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
      log(res.statusCode);
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
}

const getParams = (data) => {
  return {
    Destination: {
      ToAddresses: ["paul.alex.serban@gmail.com", "contactus.stage@lynxit.ro"],
    },
    Message: {
      Body: {
        Text: {
          Data: `
Ai primit un mesaje de la ${data.persoana_de_contact}, reprezentant al firmei ${
            data.nume_companie
          }.
${data.message ? `Mesaj: ${data.message}` : ""}
Tip utilizare: ${data.tip_de_utilizare}
Numar echipamente: ${data.numar_echipamente}
Date contact:
- Telefon: ${data.telefon}
- Email: ${data.email}`,
        },
      },
      Subject: {
        Data: `Mesaj de la ${data.persoana_de_contact} in numele companiei ${data.nume_companie}`,
      },
    },
    Source: "contactus.stage@lynxit.ro", // Replace with a verified email address
  };
};

const validateData = (userData) => {
  let userDataIsValid = false;

  userData.forEach((item) => {
    const isValid = item.isValid;
    const itemValue = item.value;
    const isString = typeof item.value === "string";
    const hasValidationPattern = !!item.validationPattern;
    const isObject = typeof item.value === "object";

    if (isValid && isString && hasValidationPattern && !isObject) {
      const regex = new RegExp(patterns[item.validationPattern]);
      regex.lastIndex = 0;
      const regValid = regex.test(itemValue);
      if (regValid) {
        userDataIsValid = true;
      } else {
        error("[ error ] invalid user data");
        return;
      }
    }
  });

  let dataString = "";
  let dataObj = {};

  userData.forEach((item) => {
    dataString += `${item.fieldId}: ${item.value} \n`;
    dataObj[item.fieldId] = item.value;
  });

  log({ "[ info ]": dataString });
  return dataObj;
};

exports.handler = async (event) => {
  try {
    const { body } = event;
    const formData = JSON.parse(body);
    const captchaToken = formData.token;
    const userData = formData.body;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    // Verify captcha
    const captchaResponse = await verifyCaptcha(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`
    );

    const jsonResponse = await JSON.parse(captchaResponse);

    log({ captchaResponse: jsonResponse.success });

    if (!jsonResponse.success) {
      error("[ error ] invalid captcha token");
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid captcha token" }),
      };
    }

    // Validate user data
    const validatedData = validateData(userData);
    const sesParams = getParams(validatedData);

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
