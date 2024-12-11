import { RefuelOptions, RequestOptions } from "../types";
export declare class RefuelAPIError extends Error {
    readonly response?: Response | undefined;
    readonly url: string | undefined;
    readonly status: number | undefined;
    constructor(response?: Response | undefined, url?: string | undefined, status?: number | undefined);
}
export declare class RefuelBase {
    protected readonly accessToken: string;
    protected readonly baseUrl: string;
    protected readonly maxRetries: number;
    protected readonly initialRetryTimeout: number;
    protected readonly retryStatusCodes: number[];
    constructor(accessToken: string, options?: RefuelOptions);
    request<Response, RequestBody = unknown>(endpoint: string, options?: RequestOptions<RequestBody>): Promise<Response>;
}
