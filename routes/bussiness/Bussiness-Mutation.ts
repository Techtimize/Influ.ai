import { useRouter } from "next/navigation";
import { LoginApi, OnboardingApi, SignupApi, WaitlistApi } from "./bussiness.routes";
import { toast } from "sonner";
import { OnboardingRequestProps, OnboardingResponseProps } from "@/types/onboarding-type";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { LoginFormValidator } from "@/validator/Auth/login-validator";
import { SignUpFormValidator } from "@/validator/Auth/signup-validator";


export function WaitlistMutation() {
    return useMutation({
        mutationFn: (email: string) => WaitlistApi(email),
        onSuccess: ({ data }: { data: any }) => {
            toast.success(data.message);
        },
        onError: (error: any) => {
        const axiosError = error as AxiosError<{ detail: string }>;
        toast.error('Failed to add to waitlist', {
          description: axiosError.response?.data?.detail as string,
        });
      },
    });
}

export function OnboardingMutation() {
    // const router = useRouter();
    return useMutation({
      mutationFn: (data: OnboardingRequestProps) => OnboardingApi(data),
      onSuccess: ({ data }: { data: OnboardingResponseProps }) => {
        toast.success(data.message);
      },
      onError: (error) => {
        const axiosError = error as AxiosError<{ detail: string }>;
        toast.error('Failed to change password', {
          description: axiosError.response?.data?.detail as string,
        });
      },
    });
  }

  export function LoginMutation() {
    return useMutation({
      mutationFn: (data: LoginFormValidator) => LoginApi(data),
      onSuccess: ({ data }: { data: any }) => {
        toast.success(data.message);
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
      mutationFn: (data: SignUpFormValidator) => SignupApi(data),
      onSuccess: ({ data }: { data: any }) => {
        toast.success(data.message);
      },
      onError: (error: any) => {
        const axiosError = error as AxiosError<{ detail: string }>;
        toast.error('Failed to signup', {
          description: axiosError.response?.data?.detail as string,
        });
      },
    });
  }