"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
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
    mailgunApiKey: env.MAILGUN_API_KEY,
    mailgunDomain: env.MAILGUN_DOMAIN,
    mailgunAppEmail: env.MAILGUN_APP_EMAIL,
};
exports.default = appConfig;
//# sourceMappingURL=index.js.map