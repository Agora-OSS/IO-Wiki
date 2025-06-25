import { axios } from "@/core/utils";
import type { WikiApiResponse } from "@/core/utils/types";
import type {
  AccountDetailsProtocol,
  EmailExsistProtocol,
  LoginSuccessProtocol,
} from "@/feature/account/data/protocol";
import type { AccountType } from "@/feature/account/domain/entities";

export const callLogin = async (email: string, password: string) => {
  const { data: responseBody } = await axios.post<
    WikiApiResponse<LoginSuccessProtocol>
  >("/api/v1/members/login", { email, password });

  return responseBody.data;
};

export const callRegist = async (account: AccountType) => {
  const { data: responseBody } = await axios.post<
    WikiApiResponse<LoginSuccessProtocol>
  >("/api/v1/members/sign-up", { ...account });

  return responseBody.data;
};

export const callEmailExsist = async (email: string) => {
  const { data: responseBody } = await axios.post<
    WikiApiResponse<EmailExsistProtocol>
  >("/api/v1/members/exists", { email });

  return responseBody.data;
};

export const callGetMyDetails = async () => {
  const { data: responseBody } = await axios.get<
    WikiApiResponse<AccountDetailsProtocol>
  >("/api/v1/members/me", {
    // TODO HTTP only cookies를 사용할 경우, 필요없을 수 있습니다.
    // headers : {Authorization: `Bearer ${myToken}`}
  });

  return responseBody.data;
};
