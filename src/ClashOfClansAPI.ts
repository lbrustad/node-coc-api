import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

interface IClashOfClansAPIConfig {
    token: string;
    endpoint?: string;
}

export default class ClashOfClansAPI implements IClashOfClansAPI {
    readonly token: string | undefined;
    readonly endpoint: string | undefined;

    constructor(config: IClashOfClansAPIConfig) {
        this.token = config.token;
        this.endpoint = config.endpoint ?? 'https://api.clashofclans.com/v1';
    }

    async get<TParams, TResponse>(path: string, params?: TParams): Promise<AxiosResponse<TResponse>> {
        const res = await axios.get<any, AxiosResponse<TResponse>>(path, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            },
            baseURL: this.endpoint,
            params
        }).catch((err: IError) => {
            throw err;
        });

        return res;
    }

    async post<TParams, TResponse>(path: string, params?: TParams): Promise<AxiosResponse<TResponse>> {
        const res = await axios.post<AxiosRequestConfig, AxiosResponse<TResponse>>(path, params, {
            baseURL: this.endpoint,
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        }).catch((err: IError) => {
            throw err;
        });

        return res;
    }
}
