import { axios } from "@/core/utils";
import type { WikiApiResponse } from "@/core/utils/types";
import type { InitPasswordProtocol } from "@/feature/account/data/protocol";

export const callInitPassword = async (email: string) => {
  const { data: responseBody } = await axios.post<
    WikiApiResponse<InitPasswordProtocol>
  >("/admin-api/v1/members/init-password", { email });

  return responseBody.data.newPassword;
};

export const callApproveMember = async (email: string) => {
  const { data: responseBody } = await axios.post<WikiApiResponse<null>>(
    "/admin-api/v1/members/approve",
    { email },
  );

  return responseBody.data;
};

export const callRejectMember = async (email: string) => {
  const { data: responseBody } = await axios.post<WikiApiResponse<null>>(
    "/admin-api/v1/members/reject",
    { email },
  );

  return responseBody.data;
};
