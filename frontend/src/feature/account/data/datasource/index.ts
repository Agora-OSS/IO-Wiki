import {
  callLogin,
  callRegist,
  callEmailExsist,
  callGetMyDetails,
} from "@/feature/account/data/datasource/AccountApi";
import {
  callApproveMember,
  callInitPassword,
  callRejectMember,
} from "@/feature/account/data/datasource/AdminAccountApi";

const publicApi = {
  callLogin,
  callRegist,
  callEmailExsist,
  callGetMyDetails,
};

const adminApi = {
  callApproveMember,
  callRejectMember,
  callInitPassword,
};

export { publicApi, adminApi };
