import { RefuelBase } from "../RefuelBase";
import { ApplicationUsageData } from "../types";
export declare class ApplicationUsage {
    private readonly base;
    constructor(base: RefuelBase);
    /**
     * Get usage data for a specific time period
     *
     * @example
     * ```ts
     * const usage = await refuel.applicationUsage.get("123", "2024-01-01", "2024-01-31");
     * ```
     */
    get(applicationId: string, startDate: string, endDate: string, 
    /** period in seconds */
    period?: number): Promise<ApplicationUsageData>;
}
