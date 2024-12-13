import { RefuelBase } from "../RefuelBase";
import { UsageData } from "../types";
export declare class Usage {
    private readonly base;
    constructor(base: RefuelBase);
    /**
     * Get usage data for a specific time period
     *
     * @example
     * ```ts
     * const usage = await refuel.usage.get("2024-01-01", "2024-01-31");
     * ```
     */
    get(startDate: string, endDate: string, options?: {
        applicationId?: string;
        taskId?: string;
        modelId?: string;
    }): Promise<UsageData>;
}
