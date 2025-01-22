import { RefuelBase } from "../RefuelBase";
import { TaskRunMetricsListOptions, TaskRunMetricsResponse } from "../types";
/**
 * Handles operations related to task metrics.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class TaskRunMetrics {
    private base;
    constructor(base: RefuelBase);
    /**
     * Get metrics for a task run
     *
     * @example
     * ```ts
     * const metrics = await refuel.taskRunMetrics.get(taskId, { datasetId: "123" });
     * ```
     */
    list(taskId: string, options: TaskRunMetricsListOptions): Promise<TaskRunMetricsResponse>;
}
