export declare class RefuelBase {
    protected readonly accessToken: string;
    protected readonly baseUrl: string;
    constructor(accessToken: string, baseUrl: string);
    request<Response, RequestBody = unknown>({ method, endpoint, data, }: {
        method: string;
        endpoint: string;
        data?: RequestBody;
    }): Promise<Response>;
}
