import { OnboardingFormValidator } from "@/validator/Auth/onboarding-validator";
import { BUSSINESSENDPOINT } from "./Bussiness-Endpoint";
import api from "../apiClient";
import { LoginFormValidator } from "@/validator/Auth/login-validator";
import { SignUpFormValidator } from "@/validator/Auth/signup-validator";


export const WaitlistApi = async (email: string) => {
    const response = await api.post(BUSSINESSENDPOINT.WAITLIST, { email: email });
    return response.data;
}

export const OnboardingApi = async (data: OnboardingFormValidator) => {
    const response = await api.put(BUSSINESSENDPOINT.ONBOARDING, data);
    return response.data;
}

export const OnboardingDetailsApi = async () => {
    const response = await api.get(BUSSINESSENDPOINT.ONBOARDING_DETAILS);
    return response.data;
}

export const LoginApi = async (data: LoginFormValidator) => {
    const response = await api.post(BUSSINESSENDPOINT.AUTH.LOGIN, data);
    return response.data;
}

export const SignupApi = async (data: SignUpFormValidator) => {
    const response = await api.post(BUSSINESSENDPOINT.AUTH.SIGNUP, data);
    return response.data;
}

export const MeApi = async () => {
    const response = await api.get(BUSSINESSENDPOINT.AUTH.ME);
    return response.data;
}