import type { WikiApiResponse } from "@/core/utils/types";
import { http, HttpResponse } from "msw";

const initPasswordHandler = http.post(
  "http://localhost:3000/admin-api/v1/members/init-password",
  async () => {
    return HttpResponse.json<
      WikiApiResponse<{
        newPassword: string;
      }>
    >(
      {
        data: {
          newPassword: "password123!@#",
        },
        message: null,
        success: true,
      },
      {
        status: 200,
        statusText: "OK",
        headers: {},
      },
    );
  },
);

const approveHandler = http.post(
  "http://localhost:3000/admin-api/v1/members/approve",
  async () => {
    return HttpResponse.json<WikiApiResponse<null>>(
      {
        data: null,
        message: null,
        success: true,
      },
      {
        status: 200,
        statusText: "OK",
        headers: {},
      },
    );
  },
);

const rejectHandler = http.post(
  "http://localhost:3000/admin-api/v1/members/reject",
  async () => {
    return HttpResponse.json<WikiApiResponse<null>>(
      {
        data: null,
        message: null,
        success: true,
      },
      {
        status: 200,
        statusText: "OK",
        headers: {},
      },
    );
  },
);

export const adminHandlers = [
  initPasswordHandler,
  approveHandler,
  rejectHandler,
];
