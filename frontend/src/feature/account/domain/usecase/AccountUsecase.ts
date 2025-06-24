import { validateEntity } from "@/core/utils/validator";
import { AccountRepository } from "@/feature/account/data/repository";
import { Account, type AccountType } from "@/feature/account/domain/entities";
import { flatMap, map, pipe, take, toArray } from "@fxts/core";

class AccountUsecase {
  async login(loginAccount: AccountType) {
    return await AccountRepository.doLogin(loginAccount);
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

  async checkEmailExsist({ email, password }: AccountType) {
    const validResult = pipe(
      [Account.create({ email, password })],
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
    if (Account.getAccountAtom().get().email !== "") {
      return Account.getAccountAtom().get();
    }
    // real implementation
    // const myDetails = await AccountRepository.getMyDetails();

    // mock data
    const myDetails = { email: "test@example.com" };

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
