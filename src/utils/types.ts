import { v4 as uuidv4 } from "uuid";
import { Request } from "express";

import { Auth } from "../entity/auth";
import { User } from "../entity/user";

export interface IRequest extends Request {
  user?: User;
  decoded?: IToken;
  role?: string;
  userAuth: Auth;
  ebayToken?: string;
  File?: any;
}

export interface IToken {
  ref: typeof uuidv4;
  role: string;
}
