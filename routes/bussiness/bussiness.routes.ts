import { BUSSINESSENDPOINT } from "./Bussiness-Endpoint";
import api from "../apiClient";
import { OnboardingRequestProps, OnboardingResponseProps } from "@/types/onboarding-type";


export const WaitlistApi = async (email: string) => {
    const response = await api.post(BUSSINESSENDPOINT.WAITLIST, { email: email });
    return response.data;
}

export const OnboardingApi = async (data: OnboardingRequestProps): Promise<OnboardingResponseProps> => {
    const response = await api.post(BUSSINESSENDPOINT.ONBOARDING, data);
    return response.data;
}

export const OnboardingDetailsApi = async (): Promise<OnboardingResponseProps> => {
    const response = await api.get(BUSSINESSENDPOINT.ONBOARDING);
    return response.data;
}
