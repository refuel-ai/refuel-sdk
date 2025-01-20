import { RefuelBase } from "../RefuelBase";
import { TeamUsageData, TeamUsageGetOptions } from "../types";
export declare class TeamUsage {
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
    get(startDate: string, endDate: string, options?: TeamUsageGetOptions): Promise<TeamUsageData>;
}
