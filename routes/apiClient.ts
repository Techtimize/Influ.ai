import { getAuthTokenProvider } from "@/provider/auth-provider";
import useAuthStore from "@/store/AuthsStore";
import { AUTHENDPOINT } from "./auth/Auth-Endpoint";
import { toast } from "sonner";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getAuthTokenProvider();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const originalRequest = error.config;

    const isLoginRequest =
      originalRequest?.url?.includes(AUTHENDPOINT.LOGIN) &&
      originalRequest?.method === 'post';

    if (error.response && error.response.status === 401 && !isLoginRequest) {
      useAuthStore.getState().clearAuth();

      if (error.response?.status === 401) {
        toast( 'Unauthorized access',{
          description: 'You are not authorized to access this resource',
        });
      } else if (error.response?.status === 500) {
        toast.error('Server error', {
          description: 'Server error',
        });
      } else {
        toast.error('Session expired. Please login again.', {
          description: 'Session expired. Please login again.',
        });
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  },
);

export default api;