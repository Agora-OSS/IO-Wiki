import { validateEntity } from "@/core/utils/validator";
import { Account, type AccountType } from "@/feature/account/domain/entities";
import { flatMap, fx, map, pipe, take, toArray } from "@fxts/core";
import { createAccount, doLogin } from "@/feature/account/data/repository";

class AccountUsecase {
  async login(loginAccount: AccountType) {
    const validResult = pipe(
      [Account.create({ ...loginAccount })],
      flatMap((account) => this.validateAccountInfo(account)),
      take(1),
      toArray,
    )[0];

    if (!validResult.success) {
      return validResult.errors;
    }

    return await doLogin(validResult.data);
  }

  validateAccountInfo(accountData: AccountType) {
    return validateEntity(
      accountData,
      (account) => Account.create(account),
      Account.getValidator(),
    );
  }

  async register(accountData: AccountType) {
    const validResult = pipe(
      [Account.create({ ...accountData })],
      flatMap((account) => this.validateAccountInfo(account)),
      take(1),
      toArray,
    )[0];

    if (!validResult.success) {
      return validResult.errors;
    }

    return await createAccount(validResult.data);
  }
}

const accountUsecase = new AccountUsecase();

export { accountUsecase as AccountUsecase };
