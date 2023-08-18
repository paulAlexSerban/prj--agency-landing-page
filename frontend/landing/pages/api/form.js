import lambdaHandler from "./_lambdaHandler";

export default async function handler(req, res) {
  // const { body } = req;
  // const formData = JSON.parse(body);
  // const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  // console.log({ formData, secretKey });

  await lambdaHandler(req);

  // Sends a HTTP success code
  res
    .status(200)
    .json({ status: 200, message: "Mesajul a fost transmis cu succes!" });
}
