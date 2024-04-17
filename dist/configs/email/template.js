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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNewAccountNoMail = void 0;
const _1 = __importDefault(require("."));
const sendNewAccountNoMail = (to, name, acctNo) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, _1.default)({
        to,
        subject: "mBank account Number",
        html: `
    <html>
        <head>
        </head>
        <body>
            <h3>Dear ${name},</h3> <h3>Thank You for Banking with us.</h3><h3>Your new account number is ${acctNo}.</h3><h3>You received this survey because you opened a new mBank account recently.</h3><h3>We would love to get feedback on your experience throughout the account opening process to enable us to serve you better.</h3>
        </body>
    </html>
`,
    });
});
exports.sendNewAccountNoMail = sendNewAccountNoMail;
//# sourceMappingURL=template.js.map