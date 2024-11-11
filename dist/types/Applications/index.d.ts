import { RefuelBase } from "../RefuelBase";
import { Application, ApplicationRequestBody, ApplicationResponse } from "../types";
export declare class Applications {
    private readonly base;
    constructor(base: RefuelBase);
    create(data: ApplicationRequestBody): Promise<Application>;
    get(applicationId: string): Promise<Application>;
    list(projectId?: string): Promise<Application[]>;
    delete(applicationId: string): Promise<void>;
    label<T extends Record<string, unknown> = Record<string, unknown>>(applicationId: string, data: T[], options?: {
        modelId?: string;
    }): Promise<ApplicationResponse>;
}
