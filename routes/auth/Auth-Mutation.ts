import { LoginApi, SignupApi } from "./auth.routes";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { LoginFormValidator } from "@/validator/Auth/login-validator";
import { SignUpRequestProps, SignUpResponseProps } from "@/types/Auth/signup-type";

export function LoginMutation() {
  return useMutation({
    mutationFn: (data: LoginFormValidator) => LoginApi(data),
    onSuccess: (response: { message: string }) => {
      toast.success(response.message);
    },
    onError: (error: any) => {
      const axiosError = error as AxiosError<{ detail: string }>;
      toast.error('Failed to login', {
        description: axiosError.response?.data?.detail as string,
      });
    },
  });
}

export function SignupMutation() {
  return useMutation({
    mutationFn: (data: SignUpRequestProps) => SignupApi(data),
    onSuccess: (response: SignUpResponseProps) => {
      toast.success(response.message);
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{ detail?: unknown; message?: string }>;
      const detail = axiosError.response?.data?.detail;
      toast.error('Failed to signup', {
        description: typeof detail === 'string' ? detail : axiosError.response?.data?.message,
      });
    },
  });
}
