import { AppDataSource } from "../data-source";
import { Auth } from "../entity/auth";

export async function generateAcctNo() {
  let acctNo = String(Math.floor(Math.random() * 9000000000) + 1000000000);

  let acctNoExist = await AppDataSource.manager.findBy(Auth, { acctNo });

  while (acctNoExist.length) {
    acctNo = String(Math.floor(Math.random() * 9000000000) + 1000000000);

    acctNoExist = await AppDataSource.manager.findBy(Auth, { acctNo });
  }

  return acctNo;
}
