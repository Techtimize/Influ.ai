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
        mutationFn: async (email: string) => {
            const response = await WaitlistApi(email);
            if (response?.success === false) {
                throw new Error(response?.message || "Failed to add to waitlist");
            }
            return response;
        },
        onSuccess: (response: { success?: boolean; message?: string }) => {
            toast.success(response?.message || "Email added to waitlist successfully");
        },
        onError: (error: unknown) => {
            const axiosError = error as AxiosError<{
                success?: boolean;
                message?: string;
            }>;
            const message =
                axiosError.response?.data?.message ||
                (error instanceof Error ? error.message : undefined) ||
                "Failed to add to waitlist";
            toast.error(message);
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