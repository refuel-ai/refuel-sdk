import { RefuelOptions, RequestOptions } from "../types";
export declare class RefuelBase {
    protected readonly accessToken: string;
    protected readonly baseUrl: string;
    protected readonly maxRetries: number;
    protected readonly initialRetryTimeout: number;
    protected readonly retryStatusCodes: number[];
    constructor(accessToken: string, options?: RefuelOptions);
    request<Response, RequestBody = unknown>(options: RequestOptions<RequestBody>): Promise<Response>;
}
