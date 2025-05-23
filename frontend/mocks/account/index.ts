import type { WikiApiResponse } from "@/core/utils/types";
import type { Account } from "@/feature/account/domain/entities";
import { fx } from "@fxts/core";
import { http, HttpResponse } from "msw";
import { random } from "typia";

export const createAccountMocks = (count: number) =>
  fx(Array(count).fill(0))
    .map((_) => random<Account>())
    .toArray();

export const createEncorrectValidationAccountMocks = (count: number) =>
  fx(Array(count).fill(0))
    .map((_) => {
      const mock = random<Account>();

      return { ...mock, password: mock.password?.slice(0, 3) || "123" };
    })
    .toArray();

const loginHandler = http.post("http://localhost:3000/api/login", async () => {
  return HttpResponse.json<WikiApiResponse<boolean>>(
    {
      data: true,
      message: "",
      success: true,
    },
    {
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Type": "x-www-form-urlencoded",
      },
    },
  );
});

const accountRegistHandler = http.post(
  "http://localhost:3000/api/regist",
  async () => {
    return HttpResponse.json<WikiApiResponse<boolean>>(
      {
        data: true,
        message: "",
        success: true,
      },
      {
        status: 200,
        statusText: "OK",
        headers: {
          "Content-Type": "x-www-form-urlencoded",
        },
      },
    );
  },
);

export const accountHandler = [loginHandler, accountRegistHandler];
