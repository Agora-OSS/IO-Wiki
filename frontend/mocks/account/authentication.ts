import type { WikiApiResponse } from "@/core/utils/types";
import { http, HttpResponse } from "msw";

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

export const authenticationHandlers = [
  loginHandler,
  accountRegistHandler,
  checkSameEmail,
  logoutHandler,
];
