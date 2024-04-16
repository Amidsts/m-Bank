import sendMail from ".";

export const sendNewAccountNoMail = async (
  to: string,
  name: string,
  acctNo: string
) =>
  await sendMail({
    to,
    subject: "mBank account Number",
    html: `
    <html>
        <head>
        </head>
        <body>
            <h3>Dear ${name},</h3> <h3>Thank You for Banking with us.</h3><h3>Your new account number is ${acctNo}.</h3><h3>You received this survey because you opened a new mBank account recently.</h3><h3>We would love to get feedback on your experience throughout the account opening process to enable us to serve you better.</h3>
        </body>
    </html>
`,
  });
