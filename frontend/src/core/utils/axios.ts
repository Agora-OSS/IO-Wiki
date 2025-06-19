import Axios from "axios";
import { toast } from "sonner";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable sending cookies with requests
});

const processErrorStatus = (status: number): string => {
  // TODO : 다국어 적용이 필요할 시 메시지 변경.
  if (status === 400)
    return "요청이 올바르지 않습니다. 입력값을 확인해 주세요.";
  if (status === 401) return "인증이 필요합니다. 다시 로그인해 주세요.";
  if (status === 403) return "접근 권한이 없습니다. 관리자에게 문의하세요.";
  if (status === 404) return "요청하신 정보를 찾을 수 없습니다.";
  if (status === 409) return "이미 등록된 정보입니다.";
  if (status === 422) return "요청하신 데이터에 문제가 있습니다.";
  if (status === 429)
    return "너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해 주세요.";
  if (status === 500)
    return "서버에 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.";
  if (status === 502) return "서버에 일시적인 장애가 발생했습니다.";
  if (status === 503)
    return "서버가 현재 점검 중입니다. 잠시 후 다시 시도해 주세요.";
  if (status === 504)
    return "서버 응답이 지연되고 있습니다. 잠시 후 다시 시도해 주세요.";

  return "알 수 없는 오류가 발생했습니다.";
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      console.error("Error response:", error.response.data);
      console.error("Status code:", error.response.status);

      toast.error(processErrorStatus(error.response.status));
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    }

    return Promise.reject(error);
  },
);

export default axios;
