import { RefuelBase } from "../RefuelBase";
import { TaskRunMetricsListOptions, TaskRunMetricsResponse } from "../types";

/**
 * Handles operations related to task metrics.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class TaskRunMetrics {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Get metrics for a task run
     *
     * @example
     * ```ts
     * const metrics = await refuel.taskRunMetrics.get(taskId, { datasetId: "123" });
     * ```
     */
    async list(
        taskId: string,
        options: TaskRunMetricsListOptions
    ): Promise<TaskRunMetricsResponse> {
        if (options.datasetId && options.evalSet) {
            throw new Error(
                "Cannot specify both datasetId and evalSet. Please specify one or the other."
            );
        }

        const path = options.evalSet
            ? `/tasks/${taskId}/evalset/metrics`
            : `/tasks/${taskId}/runs/${options.datasetId}/metrics`;

        const params = new URLSearchParams();

        if (options.filters) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }

        if (options.modelId) {
            params.append("model_id", options.modelId);
        }

        return this.base.request<TaskRunMetricsResponse>(
            `${path}?${params.toString()}`
        );
    }
}
