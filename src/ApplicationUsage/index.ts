import { RefuelBase } from "../RefuelBase";
import { ApplicationUsageData } from "../types";

export class ApplicationUsage {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Get usage data for a specific time period
     *
     * @example
     * ```ts
     * const usage = await refuel.applicationUsage.get("123", "2024-01-01", "2024-01-31");
     * ```
     */
    async get(
        applicationId: string,
        startDate: string,
        endDate: string,
        /** period in seconds */
        period?: number
    ): Promise<ApplicationUsageData> {
        const params = new URLSearchParams();
        params.append("start_date", startDate);
        params.append("end_date", endDate);

        if (period) {
            params.append("period", period.toString());
        }

        return this.base.request<ApplicationUsageData>(
            `/applications/${applicationId}/usage?${params.toString()}`
        );
    }
}
