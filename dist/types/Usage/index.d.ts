import { RefuelBase } from "../RefuelBase";
import { UsageData } from "../types";
export declare class Usage {
    private readonly base;
    constructor(base: RefuelBase);
    get(startDate: string, endDate: string, options?: {
        applicationId?: string;
        taskId?: string;
        modelId?: string;
    }): Promise<UsageData>;
}
