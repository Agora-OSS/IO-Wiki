import { validateEntity } from "@/core/utils/validator";
import { Account, type AccountType } from "@/feature/account/domain/entities";
import { flatMap, map, pipe, take, toArray } from "@fxts/core";
import { AccountRepository } from "@/feature/account/data/repository";

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

    return await AccountRepository.doLogin(validResult.data);
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

    return await AccountRepository.createAccount(validResult.data);
  }

  async checkEmailExsist(email: string) {
    const validResult = pipe(
      [email],
      map((email) => Account.create({ email, password: "" })),
      flatMap((account) => this.validateAccountInfo(account)),
      take(1),
      toArray,
    )[0];

    if (!validResult.success) {
      return validResult.errors;
    }

    return await AccountRepository.checkEmailExsist(validResult.data.email);
  }
  async getMyDetails() {
    const myDetails = await AccountRepository.getMyDetails();

    return pipe(
      [myDetails],
      map(({ email }) => Account.create({ email, password: "" })),
      take(1),
      toArray,
    )[0];
  }
}

const accountUsecase = new AccountUsecase();

export { accountUsecase as AccountUsecase };
