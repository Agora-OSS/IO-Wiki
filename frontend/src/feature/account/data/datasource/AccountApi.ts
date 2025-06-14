import type { WikiApiResponse } from "@/core/utils/types";
import axios from "axios";
import type { AccountType } from "@/feature/account/domain/entities";

export const callLogin = async (email: string, password: string) => {
  const { data: responseBody } = await axios.post<WikiApiResponse<boolean>>(
    "/api/v1/members/login",
    { email, password },
    {
      headers: {
        "Content-Type": "x-www-form-urlencoded",
      },
    },
  );

  return responseBody.data;
};

export const callRegist = async (account: AccountType) => {
  const { data: responseBody } = await axios.post<WikiApiResponse<boolean>>(
    "/api/v1/members/sign-up",
    { ...account },
  );

  return responseBody.data;
};

type EmailExsistResponse = {
  exists: boolean;
};

export const callEmailExsist = async (email: string) => {
  const { data: responseBody } = await axios.post<
    WikiApiResponse<EmailExsistResponse>
  >("/api/v1/members/exists", { email });

  return responseBody.data;
};
