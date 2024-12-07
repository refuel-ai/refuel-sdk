import {
    DEFAULT_BASE_URL,
    DEFAULT_MAX_RETRIES,
    DEFAULT_RETRY_STATUS_CODES,
    DEFAULT_INITIAL_RETRY_TIMEOUT,
} from "../consts";
import { RefuelOptions, RequestOptions } from "../types";

export class RefuelAPIError extends Error {
    constructor(
        public readonly response?: Response,
        public readonly url: string | undefined = response?.url,
        public readonly status: number | undefined = response?.status
    ) {
        super(`${response?.statusText || "Network error"} (${url})`);
        this.name = "RefuelAPIError";
    }
}

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

        let retries = 0;

        while (true) {
            try {
                const response = await fetch(url, {
                    method,
                    headers,
                    body,
                });

                if (
                    method.toUpperCase() === "GET" &&
                    retryStatusCodes.includes(response.status)
                ) {
                    if (retries >= maxRetries) {
                        throw new RefuelAPIError(response);
                    }
                    // Proceed to retry logic
                } else if (!response.ok) {
                    // Non-retriable error
                    throw new RefuelAPIError(response);
                } else {
                    // Successful response
                    const responseJSON = await response.json();
                    return (responseJSON.data || responseJSON) as Response;
                }
            } catch (error) {
                // Handle network errors or exceptions thrown by fetch
                if (retries >= maxRetries) {
                    throw new RefuelAPIError(undefined, url);
                }
                // Proceed to retry logic
            }

            // Retry logic
            // Calculate exponential backoff with jitter
            const baseBackoff = initialRetryTimeout * Math.pow(2, retries);
            const jitter = Math.random() * 1_000;
            const backoffTime = baseBackoff + jitter;

            // Wait for the calculated backoff time
            await new Promise((resolve) => setTimeout(resolve, backoffTime));

            retries += 1;
        }
    }
}
