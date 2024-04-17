"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = require("../../../utils/response");
const templates_1 = require("../../../configs/sms/templates");
function signupController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstName, lastName, email, password, phoneNo, txPin, } = req.body;
        try {
            // const userExist = await AppDataSource.manager.findBy(User, { email });
            // if (userExist.length)
            //   return handleResponse({
            //     res,
            //     message: "Account already exists, Login instead please",
            //     status: 409,
            //   });
            // const acctNo = await generateAcctNo();
            // const user = new User();
            // user.firstName = firstName;
            // user.lastName = lastName;
            // user.fullName = `${firstName} ${lastName}`;
            // user.email = email;
            // user.phoneNo = phoneNo;
            // user.createdAt = new Date();
            // user.lastLoginAt = new Date();
            // const auth = new Auth();
            // auth.user = user;
            // auth.password = await hashPassword(password);
            // auth.acctNo = acctNo;
            // auth.txPin = txPin;
            // auth.createdAt = new Date();
            // await AppDataSource.transaction(async (manager) => {
            //   await manager.save(user);
            //   await manager.save(auth);
            // });
            yield (0, templates_1.sendNewAcctNoSms)(phoneNo, "user.fullName", "acctNo");
            // await sendNewAccountNoMail(email, user.fullName, acctNo)
            console.log({
                firstName,
                lastName,
                email,
                password,
                phoneNo,
                txPin,
            });
            return (0, response_1.handleResponse)({
                res,
                message: "Account created successfully",
            });
        }
        catch (err) {
            (0, response_1.handleResponse)({
                res,
                err,
                message: `Internal Server Error:  ${err.message}`,
                status: 500,
            });
        }
    });
}
exports.default = signupController;
/**
 * after the user login
 * send an sms (of the account number) to the registered phone number
 * request for multifactor authentication (register fingerprint)
 * if MFA is not set, account issetupcomplete is false
 * user cannot login until he set up MFA with fingerprint
 */
//# sourceMappingURL=signUp.js.map