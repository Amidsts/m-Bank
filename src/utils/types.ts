
import { Request } from "express";


export interface IRequest extends Request {
  // user?: IUser;
  decoded?: IToken;
  // role?: string;
  // userAuth: IAuth;
}

export interface IToken {
  // ref: Types.ObjectId;
  role: string;
}
