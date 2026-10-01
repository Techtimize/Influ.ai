import { BUSSINESSENDPOINT } from "../bussiness/Bussiness-Endpoint";
import api from "../apiClient";
import { IntakeResponseProps } from "@/types/company-details-type";


export const IntakeApi = async (): Promise<IntakeResponseProps> => {
    const response = await api.get(BUSSINESSENDPOINT.INTAKE);
    return response.data;
}
