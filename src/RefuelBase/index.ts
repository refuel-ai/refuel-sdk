import {
    DEFAULT_BASE_URL,
    DEFAULT_MAX_RETRIES,
    DEFAULT_RETRY_STATUS_CODES,
    DEFAULT_INITIAL_RETRY_TIMEOUT,
} from "../consts";
import { RefuelOptions, RequestOptions } from "../types";

export class RefuelBase {
    protected readonly accessToken: string;
    protected readonly baseUrl: string;
    protected readonly maxRetries: number;
    protected readonly initialRetryTimeout: number;
    protected readonly retryStatusCodes: number[];

    constructor(accessToken: string, options: RefuelOptions = {}) {
        this.accessToken = accessToken;
        this.baseUrl = options.baseUrl ?? DEFAULT_BASE_URL;
        this.maxRetries = options.maxRetries ?? DEFAULT_MAX_RETRIES;
        this.initialRetryTimeout =
            options.initialRetryTimeout ?? DEFAULT_INITIAL_RETRY_TIMEOUT;
        this.retryStatusCodes =
            options.retryStatusCodes ?? DEFAULT_RETRY_STATUS_CODES;
    }

    public async request<Response, RequestBody = unknown>(
        options: RequestOptions<RequestBody>
    ): Promise<Response> {
        const {
            method,
            endpoint,
            data,
            retries = 0,
            maxRetries = this.maxRetries,
            initialRetryTimeout = this.initialRetryTimeout,
            retryStatusCodes = this.retryStatusCodes,
        } = options;

        const url = `${this.baseUrl}${endpoint}`;
        const headers: HeadersInit = {
            Authorization: `Bearer ${this.accessToken}`,
        };

        let body: BodyInit | undefined;

        if (data instanceof FormData) {
            body = data;
        } else if (data) {
            headers["Content-Type"] = "application/json";
            body = JSON.stringify(data);
        }

        const response = await fetch(url, {
            method,
            headers,
            body,
        });

        if (retryStatusCodes.includes(response.status)) {
            if (retries >= maxRetries) {
                throw new Error(
                    `Max retries reached while waiting for the request to complete. Last response status: ${response.status}`
                );
            }

            // Calculate exponential backoff with jitter
            const baseBackoff = initialRetryTimeout * Math.pow(2, retries);
            const jitter = Math.random() * 1_000;
            const backoffTime = baseBackoff + jitter;

            // Wait for the calculated backoff time
            await new Promise((resolve) => setTimeout(resolve, backoffTime));

            // Retry the request recursively with incremented retries
            return this.request<Response, RequestBody>({
                ...options,
                retries: retries + 1,
            });
        }

        const responseJSON = await response.json();

        if (!response.ok) {
            throw new Error(
                responseJSON?.error_msg ||
                    "An error occurred while making the API request."
            );
        }

        return (responseJSON.data || responseJSON) as Response;
    }
}
