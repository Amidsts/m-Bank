import "dotenv/config";

const { env } = process;

const appConfig = {
  environment: env.NODE_ENV,
  port: env.PORT,
};

export default appConfig;
