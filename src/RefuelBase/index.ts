export class RefuelBase {
    protected readonly accessToken: string;
    protected readonly baseUrl: string;

    constructor(accessToken: string, baseUrl: string) {
        this.accessToken = accessToken;
        this.baseUrl = baseUrl;
    }

    public async request<Response, RequestBody = unknown>({
        method,
        endpoint,
        data,
    }: {
        method: string;
        endpoint: string;
        data?: RequestBody;
    }): Promise<Response> {
        const url = `${this.baseUrl}${endpoint}`;
        const headers: HeadersInit = {
            Authorization: `Bearer ${this.accessToken}`,
        };

        let body;

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
