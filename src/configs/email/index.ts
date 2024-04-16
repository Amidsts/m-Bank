import axios from "axios";
import appConfig from "..";
import qs from "qs";

const { mailgunApiKey, mailgunDomain, mailgunAppEmail } = appConfig;
async function sendMail({
  to,
  subject,
  html,
  from = mailgunAppEmail,
}: {
  to: string;
  subject: string;
  html: string;
  from?: string;
}) {
  try {
    const { data } = await axios.post(
      `https://api.mailgun.net/v3/${mailgunDomain}/messages`,
      qs.stringify({
        from,
        to,
        subject,
        html,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: "api",
          password: mailgunApiKey,
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
}

export default sendMail;
