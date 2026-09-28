import { useQuery } from "@tanstack/react-query";
import { OnboardingDetailsApi } from "./bussiness.routes";



export const OnboardingDetailsQuery = () => {
    return useQuery({
        queryKey: ['onboarding-details'],
        queryFn: () => OnboardingDetailsApi(),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
}