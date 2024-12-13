import { RefuelBase } from "../RefuelBase";
import { TaskRun, TaskRunCancelOptions, TaskRunCreateOptions, TaskRunListOptions } from "../types";
/**
 * Handles operations related to task runs.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class TaskRuns {
    private base;
    constructor(base: RefuelBase);
    /**
     * Create a task run
     *
     * @example
     * ```ts
     * const taskRun = await refuel.taskRuns.create(taskId, { datasetId });
     * ```
     */
    create(taskId: string, options?: TaskRunCreateOptions): Promise<TaskRun>;
    /**
     * Cancel a task run
     *
     * @example
     * ```ts
     * await refuel.taskRuns.cancel(taskId, { datasetId });
     * ```
     */
    cancel(taskId: string, options: TaskRunCancelOptions): Promise<void>;
    /**
     * List all task runs
     *
     * @example
     * ```ts
     * const taskRuns = await refuel.taskRuns.list(taskId);
     * ```
     */
    list(taskId: string, options?: TaskRunListOptions): Promise<TaskRun[]>;
}
