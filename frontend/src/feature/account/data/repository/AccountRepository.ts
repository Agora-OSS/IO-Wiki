import type { AccountType } from "../../domain/entities";
import { callLogin, callRegist } from "../datasource";

export const doLogin = async (account: AccountType) => {
  return await callLogin(account.email, account.password || "");
};

export const createAccount = async (account: AccountType) => {
  return await callRegist(account);
};
