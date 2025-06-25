import { AccountUsecase } from "@/feature/account/domain/usecase";
import type { AccountType } from "../../domain/entities";

export const useAccount = (callback?: (account: AccountType) => void) => {
  return AccountUsecase.getMyDetails().then((account) => {
    if (callback) callback(account);

    return account;
  });
};
