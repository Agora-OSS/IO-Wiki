import {
  createAccount,
  doLogin,
  checkEmailExsist,
  getMyDetails,
} from "@/feature/account/data/repository/AccountRepository";
import {
  approveMember,
  initializeAdminAccount,
  rejectMember,
} from "@/feature/account/data/repository/AdminAccountRepository";

export const AccountRepository = {
  createAccount,
  doLogin,
  checkEmailExsist,
  getMyDetails,
};

export const AdminAccountRepository = {
  approveMember,
  rejectMember,
  initializeAdminAccount,
};
