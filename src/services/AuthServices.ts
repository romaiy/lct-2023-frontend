import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse } from "../models/response/AuthResponse";

export default class AuthServices {
    static async login(email: string, password: string, role: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/users/login', {email, password, role})
    };

    static async registration(username: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/users/register', {username, email, password})
    };

    static async logout(): Promise<void> {
        return $api.post('/users/logout', {refreshToken: `${localStorage.getItem('rtoken')}`})
    };
};

