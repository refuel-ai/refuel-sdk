import { RefuelBase } from "../RefuelBase";
import { TeamUsageData, TeamUsageGetOptions } from "../types";

export class TeamUsage {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Get usage data for a specific time period
     *
     * @example
     * ```ts
     * const usage = await refuel.usage.get("2024-01-01", "2024-01-31");
     * ```
     */
    async get(
        startDate: string,
        endDate: string,
        options?: TeamUsageGetOptions
    ): Promise<TeamUsageData> {
        const params = new URLSearchParams();
        params.append("start_date", startDate);
        params.append("end_date", endDate);

        if (options?.applicationId) {
            params.append("application_id", options.applicationId);
        }

        if (options?.taskId) {
            params.append("task_id", options.taskId);
        }

        if (options?.modelId) {
            params.append("model", options.modelId);
        }

        return this.base.request<TeamUsageData>(`/usage?${params.toString()}`);
    }
}
