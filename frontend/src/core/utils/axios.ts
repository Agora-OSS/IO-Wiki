import { Account } from "@/feature/account/domain/entities";
import Axios from "axios";
import { toast } from "sonner";

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Enable sending cookies with requests
});

axios.interceptors.response.use(
  (response) => {
    if (response.data.success) {
      return response;
    }

    return Promise.reject(toast.error(response.data.message));
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      console.error("Error response:", error.response.data);
      console.error("Status code:", error.response.status);

      if (error.response.status === 401 || error.response.status === 403) {
        // Account.getAccountAtom().set({ email: "", password: "" });
        // document.location.href = "/login";
      } else {
        toast.error(error.response.data.message);
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    }

    return Promise.reject(error);
  },
);

export default axios;
