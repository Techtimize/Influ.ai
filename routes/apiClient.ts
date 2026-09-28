import { getAuthTokenProvider } from "@/provider/auth-provider";
import useAuthStore from "@/store/AuthsStore";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getAuthTokenProvider();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    const isLoginRequest =
      originalRequest?.url?.includes(AdminENDPOINT.ADMIN_ALL_CAMPAIGN) &&
      originalRequest?.method === 'post';

    if (error.response && error.response.status === 401 && !isLoginRequest) {
      useAuthStore().clearAuth();

      if (error.response?.status === 403) {
        toast.error('Unauthorized access');
      } else if (error.response?.status === 500) {
        toast.error('Server error');
      } else {
        toast.error('Session expired. Please login again.');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  },
);