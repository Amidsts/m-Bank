import { Response } from "express";
import { z } from "zod";

import { IRequest } from "../../../utils/types";
import { handleResponse } from "../../../utils/response";
import { signUpSchema } from "../auth.validators";
import { AppDataSource } from "../../../data-source";
import { User } from "../../../entity/user";
import { Auth } from "../../../entity/auth";
import { generateAcctNo } from "../../../utils/helpers";

async function signupController(req: IRequest, res: Response) {
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNo,
    txPin,
  }: z.infer<typeof signUpSchema> = req.body;

  try {
    const userExist = await AppDataSource.manager.findBy(User, { email });

    if (userExist.length)
      return handleResponse({
        res,
        message: "Account already exists, Login instead please",
        status: 409,
      });

    const acctNo = await generateAcctNo();

    const user = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.fullName = `${firstName} ${lastName}`
    user.email = email
    user.phoneNo = phoneNo
    user.createdAt= new Date();

    const auth = new Auth()
    auth.user = user
    auth.password = password
    auth.acctNo = acctNo
    auth.txPin = txPin
    auth.createdAt = new Date()

    await AppDataSource.transaction(async (manager) => {
      await manager.save(user)
      await manager.save(auth)
    });

    //send an sms (containing the account number) to the provided phone number and email

    return handleResponse({
      res,
      message: "Account created successfully",
    });
  } catch (err) {
    handleResponse({
      res,
      err,
      message: `Internal Server Error:  ${err.message}`,
      status: 500,
    });
  }
}

export default signupController;

/**
 * after the user login
 * send an sms (of the account number) to the registered phone number
 * request for multifactor authentication (register fingerprint)
 * if MFA is not set, account issetupcomplete is false
 */
