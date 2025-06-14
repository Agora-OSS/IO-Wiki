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

const loginHandler = http.post(
  "http://localhost:3000/api/v1/members/login",
  async () => {
    return HttpResponse.json<WikiApiResponse<null>>(
      {
        data: null,
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

const accountRegistHandler = http.post(
  "http://localhost:3000/api/v1/members/sign-up",
  async () => {
    return HttpResponse.json<WikiApiResponse<null>>(
      {
        data: null,
        message: "",
        success: true,
      },
      {
        status: 201,
        statusText: "Created",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);

const checkSameEmail = http.post(
  "http://localhost:3000/api/v1/members/exists",
  async () => {
    return HttpResponse.json<WikiApiResponse<{ exists: boolean }>>(
      {
        data: { exists: false },
        message: "",
        success: true,
      },
      {
        status: 200,
        statusText: "OK",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);

const logoutHandler = http.post(
  "http://localhost:3000/api/v1/members/logout",
  async () => {
    return HttpResponse.json<WikiApiResponse<null>>(
      {
        data: null,
        message: "로그아웃 되었습니다.",
        success: true,
      },
      {
        status: 200,
        statusText: "OK",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  },
);

export const accountHandler = [
  loginHandler,
  accountRegistHandler,
  checkSameEmail,
  logoutHandler,
];
