import { OnboardingFormValidator } from "@/validator/Auth/onboarding-validator";
import { BUSSINESSENDPOINT } from "./Bussiness-Endpoint";
import api from "../apiClient";
import { AnalyzeCompanyRequest, AnalyzeCompanyResponse } from "@/types/bussiness/onboarding-type";
import { SocialGrowthResponse } from "@/types/bussiness/socail-growth-type";
import { CompetitorAnalysisRequest, CompetitorAnalysisResponse } from "@/types/bussiness/competitoranalysis-type";

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

export const AnalyzeCompanyApi = async (data: AnalyzeCompanyRequest) => {
    const response = await api.post<AnalyzeCompanyResponse>(BUSSINESSENDPOINT.ANALYZE_COMPANY, data);
    return response.data;
}

export const SocialGrowthApi = async (prompt: string) => {
    const response = await api.post<SocialGrowthResponse>(BUSSINESSENDPOINT.GROWTH, { prompt: prompt });
    return response.data;
}

export const CompetitorAnalysisApi = async (data: CompetitorAnalysisRequest) => {
    const response = await api.post<CompetitorAnalysisResponse>(BUSSINESSENDPOINT.COMPETITOR_ANALYSIS, data);
    return response.data;
}