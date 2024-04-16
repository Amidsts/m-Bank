import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { AppDataSource } from "../data-source";
import { Auth } from "../entity/auth";
import { IToken } from "./types";
import appConfig from "../configs";

const { sessionLifeSpan, saltRounds, jwtSecret, hashPepper } = appConfig;

export async function generateAcctNo() {
  let acctNo = String(Math.floor(Math.random() * 9000000000) + 1000000000);

  let acctNoExist = await AppDataSource.manager.findBy(Auth, { acctNo });

  while (acctNoExist.length) {
    acctNo = String(Math.floor(Math.random() * 9000000000) + 1000000000);

    acctNoExist = await AppDataSource.manager.findBy(Auth, { acctNo });
  }

  return acctNo;
}

export function generateToken({
  data,
  expiresIn = sessionLifeSpan,
  audience = "web",
}: {
  data: IToken;
  expiresIn?: number;
  audience?: "web";
}) {
  jwt.sign(data, jwtSecret, {
    expiresIn,
    issuer: `mBank-${appConfig.environment}`,
    audience: `${audience}-user`,
  });
}

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password + hashPepper, salt);

  return hashedPassword;
}

export function comparePassword(password: string) {
  return bcrypt.compareSync(password + hashPepper, this.password);
}
