import { adminApi } from "../datasource";

export const initializeAdminAccount = async (email: string) => {
  return await adminApi.callInitPassword(email);
};

export const approveMember = async (email: string) => {
  return await adminApi.callApproveMember(email);
};

export const rejectMember = async (email: string) => {
  return await adminApi.callRejectMember(email);
};
