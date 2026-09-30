import { useQuery } from "@tanstack/react-query";
import { MeApi } from "./auth.routes";



export const MeQuery = () => {
    return useQuery({
        queryKey: ['me'],
        queryFn: () => MeApi(),
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
}
