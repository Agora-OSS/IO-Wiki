import type { AccountType } from "../../domain/entities";
import {
  callLogin,
  callRegist,
  callEmailExsist,
  callGetMyDetails,
} from "../datasource";

export const doLogin = async (account: AccountType) => {
  return await callLogin(account.email, account.password || "");
};

export const createAccount = async (account: AccountType) => {
  return await callRegist(account);
};

export const checkEmailExsist = async (email: string) => {
  return await callEmailExsist(email);
};

export const getMyDetails = async () => await callGetMyDetails();
