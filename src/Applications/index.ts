import { RefuelBase } from "../RefuelBase";
import {
    Application,
    ApplicationRequestBody,
    ApplicationResponse,
} from "../types";

export class Applications {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async create(data: ApplicationRequestBody): Promise<Application> {
        return this.base.request<Application, ApplicationRequestBody>({
            method: "POST",
            endpoint: "/applications",
            data,
        });
    }

    async get(applicationId: string): Promise<Application> {
        return this.base.request<Application>({
            method: "GET",
            endpoint: `/applications/${applicationId}`,
        });
    }

    async list(projectId?: string): Promise<Application[]> {
        const endpoint = projectId
            ? `/projects/${projectId}/applications`
            : "/applications";

        return this.base.request<Application[]>({
            method: "GET",
            endpoint,
        });
    }

    async delete(applicationId: string): Promise<void> {
        return this.base.request<void>({
            method: "DELETE",
            endpoint: `/applications/${applicationId}`,
        });
    }

    async label<T extends Record<string, unknown> = Record<string, unknown>>(
        applicationId: string,
        data: T[],
        options?: { modelId?: string }
    ): Promise<ApplicationResponse> {
        const params = new URLSearchParams();
        if (options?.modelId) {
            params.append("model_id", options.modelId);
        }

        return this.base.request<ApplicationResponse, T[]>({
            method: "POST",
            endpoint: `/applications/${applicationId}/label?${params.toString()}`,
            data,
        });
    }
}
