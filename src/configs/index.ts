import "dotenv/config";

const { env } = process;

const appConfig = {
  environment: env.NODE_ENV,
  port: env.PORT,
  sessionLifeSpan: 60 * 30,
  jwtSecret: env.JWT_SECRET,
  saltRounds: 10,
  hashPepper: env.HASH_PEPPER,
  twilioAccountSid: env.TWILIO_ACCOUNT_SID,
  twilioAuthToken: env.TWILIO_AUTH_TOKEN,
  twilioPhoneNo: env.TWILIO_PHONE_NO,
};

export default appConfig;
