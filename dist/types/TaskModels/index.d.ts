import { RefuelBase } from "../RefuelBase";
import { LabelingModel } from "../types";
/**
 * Handles operations related to labeling models.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class TaskModels {
    private base;
    constructor(base: RefuelBase);
    /**
     * List all models available for a task
     *
     * @example
     * ```ts
     * const models = await refuel.taskModels.list(taskId);
     * ```
     */
    list(taskId: string): Promise<LabelingModel[]>;
}
