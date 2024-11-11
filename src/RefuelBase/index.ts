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
            "Content-Type": "application/json",
        };

        const response = await fetch(url, {
            method,
            headers,
            body: data ? JSON.stringify(data) : undefined,
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
