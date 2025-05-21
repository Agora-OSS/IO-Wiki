import { validateEntity } from "@/core/utils/validator";
import { Account, type AccountType } from "@/feature/account/domain/entities";
import { fx, pipe } from "@fxts/core";

class AccountUsecase {
  login(account: AccountType) {
    Account.create({ ...account });

    // curl to login backend
  }

  validateAccountInfo(accountData: AccountType) {
    return validateEntity(
      accountData,
      (account) => Account.create(account),
      Account.getValidator(),
    );
  }

  register(accountData: AccountType) {
    // do something
  }
}

const accountUsecase = new AccountUsecase();

export { accountUsecase as AccountUsecase };
