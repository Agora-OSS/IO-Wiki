import type { WikiApiResponse } from "@/core/utils/types";
import { http, HttpResponse } from "msw";

const getMyDetailsHandler = http.get(
  "http://localhost:3000/api/v1/members/me",
  async () => {
    return HttpResponse.json<
      WikiApiResponse<{
        email: string;
      }>
    >(
      {
        data: {
          email: "test@example.com",
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

export const memberHandlers = [getMyDetailsHandler];
