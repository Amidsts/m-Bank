import { Response } from "express";
import { z } from "zod";

import { IRequest } from "../../../utils/helpers";
import { handleResponse } from "../../../utils/response";
import { signUpSchema } from "../auth.validators";
import { AppDataSource } from "../../../data-source";
import { User } from "../../../entity/user";

async function signupController (req: IRequest, res: Response) {

      const {
        firstName,
        lastName,
        email,
        password,
        phoneNo,
        txPin
      }: z.infer<typeof signUpSchema> = req.body

    try {
        const userExist = AppDataSource.manager.findOneBy(User, {email})

        
    } catch (err) {
        handleResponse({
          res,
          err,
          message: `Internal Server Error:  ${err.message}`,
          status: 500,
        });
    }
}

export default signupController

/**
 * after the user login
 * send an sms (of the account number) to the registered phone number
 * request for multifactor authentication (register fingerprint)
 * if MFA is not set, account issetupcomplete is false
 */