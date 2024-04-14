import { Response } from "express";

import { IRequest } from "../../../utils/helpers";
import { handleResponse } from "../../../utils/response";

async function signupController (req: IRequest, res: Response) {
    try {
        
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