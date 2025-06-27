import type { AccountType } from "../../domain/entities";
import { publicApi } from "../datasource";

export const doLogin = async (account: AccountType) => {
  return await publicApi.callLogin(account.email, account.password || "");
};

export const createAccount = async (account: AccountType) => {
  return await publicApi.callRegist(account);
};

export const checkEmailExsist = async (email: string) => {
  return await publicApi.callEmailExsist(email);
};

export const getMyDetails = async () => await publicApi.callGetMyDetails();
