import { RefuelBase } from "../RefuelBase";
import { LabelingModel } from "../types";

/**
 * Handles operations related to labeling models.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class TaskModels {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * List all models available for a task
     *
     * @example
     * ```ts
     * const models = await refuel.taskModels.list(taskId);
     * ```
     */
    async list(taskId: string): Promise<LabelingModel[]> {
        const response = await this.base.request<{ models: LabelingModel[] }>(
            `/tasks/${taskId}/models`
        );
        return response.models;
    }
}
