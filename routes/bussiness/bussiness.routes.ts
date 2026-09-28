import { OnboardingFormValidator } from "@/validator/Auth/onboarding-validator";
import { BUSSINESSENDPOINT } from "./Bussiness-Endpoint";
import api from "../apiClient";


export const WaitlistApi = async (email: string) => {
    const response = await api.post(BUSSINESSENDPOINT.WAITLIST, { email: email });
    return response.data;
}

export const OnboardingApi = async (data: OnboardingFormValidator) => {
    const response = await api.put(BUSSINESSENDPOINT.ONBOARDING, data);
    return response.data;
}