import { RefuelBase } from "../RefuelBase";
import { LabelingModel, FinetunedModelCreateOptions } from "../types";
export declare class FinetunedModels {
    private base;
    constructor(base: RefuelBase);
    /**
     * Create a new finetuned model
     *
     * @example
     * ```ts
     * const model = await refuel.finetunedModels.create({
     *     project_id: "c4a7d428-3c8d-4e39-b887-6f3ad8d23f1c",
     *     task_id: "9b2e7f15-6d4a-4c31-b518-3a69e0f98d42",
     *     datasets: ["c4a7d428-3c8d-4e39-b887-6f3ad8d23f1c"],
     *     base_model: "refuel-llm-2-large",
     *     augmented_finetuning_model: "gpt-4o",
     *     hyperparameters: {
     *         learning_rate_multiplier: 20,
     *         num_epochs: 10,
     *         lora_r: 32,
     *     },
     *     lora: true,
     * });
     * ```
     */
    create(data: FinetunedModelCreateOptions): Promise<LabelingModel>;
    /**
     * Get a finetuned model by ID
     *
     * @example
     * ```ts
     * const model = await refuel.finetunedModels.get(modelId);
     * ```
     */
    get(modelId: string): Promise<LabelingModel>;
    /**
     * List all finetuned models for a project or task
     *
     * @example
     * ```ts
     * const models = await refuel.finetunedModels.list(projectId);
     * ```
     */
    list(projectId: string, taskId?: string): Promise<LabelingModel[]>;
    update(modelId: string, data: Partial<LabelingModel>): Promise<LabelingModel>;
    /**
     * Delete a finetuned model
     *
     * @example
     * ```ts
     * await refuel.finetunedModels.delete(modelId);
     * ```
     */
    delete(modelId: string): Promise<void>;
}
