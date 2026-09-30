import { LoginApi, SignupApi } from "./auth.routes";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { getApiErrorMessage } from "@/errors/error-utils";
import { LoginFormValidator } from "@/validator/Auth/login-validator";
import { SignUpRequestProps, SignUpResponseProps } from "@/types/Auth/signup-type";

export function LoginMutation() {
  return useMutation({
    mutationFn: (data: LoginFormValidator) => LoginApi(data),
    onSuccess: (response: { message?: string }) => {
      toast.success(response?.message || "Logged in successfully");
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, "Failed to login"));
    },
  });
}

export function SignupMutation() {
  return useMutation({
    mutationFn: (data: SignUpRequestProps) => SignupApi(data),
    onSuccess: (response: SignUpResponseProps) => {
      toast.success(response?.message || "Account created successfully");
    },
    onError: (error) => {
      toast.error(getApiErrorMessage(error, "Failed to signup"));
    },
  });
}
