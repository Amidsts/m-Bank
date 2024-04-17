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
exports.comparePassword = exports.hashPassword = exports.generateToken = exports.generateAcctNo = exports.asyncWrapper = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const data_source_1 = require("../data-source");
const auth_1 = require("../entity/auth");
const configs_1 = __importDefault(require("../configs"));
const response_1 = require("./response");
const { sessionLifeSpan, saltRounds, jwtSecret, hashPepper } = configs_1.default;
function asyncWrapper(callback, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = callback();
            return response;
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
exports.asyncWrapper = asyncWrapper;
function generateAcctNo() {
    return __awaiter(this, void 0, void 0, function* () {
        let acctNo = String(Math.floor(Math.random() * 9000000000) + 1000000000);
        let acctNoExist = yield data_source_1.AppDataSource.manager.findBy(auth_1.Auth, { acctNo });
        while (acctNoExist.length) {
            acctNo = String(Math.floor(Math.random() * 9000000000) + 1000000000);
            acctNoExist = yield data_source_1.AppDataSource.manager.findBy(auth_1.Auth, { acctNo });
        }
        return acctNo;
    });
}
exports.generateAcctNo = generateAcctNo;
function generateToken({ data, expiresIn = sessionLifeSpan, audience = "web", }) {
    jsonwebtoken_1.default.sign(data, jwtSecret, {
        expiresIn,
        issuer: `mBank-${configs_1.default.environment}`,
        audience: `${audience}-user`,
    });
}
exports.generateToken = generateToken;
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield bcrypt_1.default.genSalt(saltRounds);
        const hashedPassword = yield bcrypt_1.default.hash(password + hashPepper, salt);
        return hashedPassword;
    });
}
exports.hashPassword = hashPassword;
function comparePassword(password) {
    return bcrypt_1.default.compareSync(password + hashPepper, this.password);
}
exports.comparePassword = comparePassword;
//# sourceMappingURL=helpers.js.map