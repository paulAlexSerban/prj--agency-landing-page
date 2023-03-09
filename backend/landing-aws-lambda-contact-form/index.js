const aws = require("aws-sdk");
const fetch = require("node-fetch");
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

exports.handler = async function (event) {
  log("[ info ] EVENT:", event);
  // Get data submitted in request's body.
  const body = event.body;
  const formData = JSON.parse(body);
  const captchaToken = formData.token;
  const userData = formData.body;
  let userDataIsValid = false;
  let captchaResponse = false;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  log({ captchaToken, userData });

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

  async function verifyRecaptcha(response, secretKey) {
    const url = "https://www.google.com/recaptcha/api/siteverify";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${response}`,
    };
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  }

  let dataString = "";
  let dataObj = {};

  userData.forEach((item) => {
    dataString += `${item.fieldId}: ${item.value} \n`;
    dataObj[item.fieldId] = item.value;
  });

  console.log(dataString);

  console;

  // Build SES parameters
  const params = {
    Destination: {
      ToAddresses: ["paul.alex.serban@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: `
Ai primit un mesaje de la ${dataObj.persoana_de_contact}, reprezentant al firmei ${dataObj.nume_companie}.

Mesaj: ${dataObj.message}

Tip utilizare: ${dataObj.tip_de_utilizare}

Numar echipamente: ${dataObj.numar_echipamente}

Date contact:
  - ${dataObj.telefon}
  - ${dataObj.email}

            `,
        },
      },
      Subject: {
        Data: `Mesaj de la ${dataObj.persoana_de_contact} in numele companiei ${dataObj.nume_companie}`,
      },
    },
    Source: "paul.alex.serban@gmail.com", // Replace with a verified email address
  };

  if (userDataIsValid) {
    verifyRecaptcha(captchaToken, process.env.RECAPTCHA_SECRET_KEY).then(
      (data) => {
        if (data.success) {
          log(params.Message);

          try {
            // Send email using SES
            const result = ses.sendEmail(params).promise();
            console.log(result);
            return {
              statusCode: 200,
              body: JSON.stringify({ message: "Email sent successfully" }),
            };
          } catch (error) {
            console.error(error);
            return {
              statusCode: 500,
              body: JSON.stringify({ message: "Error sending email" }),
            };
          }
        }
      }
    );
  }
};
