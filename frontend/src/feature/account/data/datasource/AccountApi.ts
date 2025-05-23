import type { WikiApiResponse } from "@/core/utils/types";
import axios from "axios";
import type { AccountType } from "@/feature/account/domain/entities";

export const callLogin = async (email: string, password: string) => {
  const { data: responseBody } = await axios.post<WikiApiResponse<boolean>>(
    "/api/login",
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
    "/api/regist",
    { ...account },
  );

  return responseBody.data;
};
