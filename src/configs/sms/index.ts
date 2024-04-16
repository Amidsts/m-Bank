import twilio from "twilio";

import appConfig from "..";

const { twilioAccountSid, twilioAuthToken, twilioPhoneNo } = appConfig;
const client = twilio(twilioAccountSid, twilioAuthToken);

async function sendSms(receiverNo: string, message: string) {
  try {
    await client.messages.create({
      from: twilioPhoneNo,
      to: receiverNo,
      body: message
    });
  } catch (err) {
    throw err;
  }
}

export default sendSms;
