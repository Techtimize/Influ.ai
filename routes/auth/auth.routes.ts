import { AUTHENDPOINT } from "./Auth-Endpoint";
import api from "../apiClient";
import { LoginFormValidator } from "@/validator/Auth/login-validator";
import { SignUpRequestProps, SignUpResponseProps } from "@/types/Auth/signup-type";


export const LoginApi = async (data: LoginFormValidator) => {
    const response = await api.post(AUTHENDPOINT.LOGIN, data);
    return response.data;
}

export const SignupApi = async (data: SignUpRequestProps): Promise<SignUpResponseProps> => {
    const response = await api.post(AUTHENDPOINT.SIGNUP, data);
    return response.data;
}

export const MeApi = async () => {
    const response = await api.get(AUTHENDPOINT.ME);
    return response.data;
}
