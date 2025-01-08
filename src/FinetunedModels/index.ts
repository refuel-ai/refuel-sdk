import { RefuelBase } from "../RefuelBase";
import { LabelingModel, FinetunedModelCreateOptions } from "../types";

export class FinetunedModels {
    private base: RefuelBase;

    /** @internal */
    constructor(base: RefuelBase) {
        this.base = base;
    }

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
    async create(data: FinetunedModelCreateOptions): Promise<LabelingModel> {
        return this.base.request<LabelingModel>(
            `/projects/${data.project_id}/finetuned_models`,
            {
                method: "POST",
                data,
            }
        );
    }

    /**
     * Get a finetuned model by ID
     *
     * @example
     * ```ts
     * const model = await refuel.finetunedModels.get(modelId);
     * ```
     */
    async get(modelId: string): Promise<LabelingModel> {
        return this.base.request<LabelingModel>(`/finetuned_models/${modelId}`);
    }

    /**
     * List all finetuned models for a project or task
     *
     * @example
     * ```ts
     * const models = await refuel.finetunedModels.list(projectId);
     * ```
     */
    async list(projectId: string, taskId?: string): Promise<LabelingModel[]> {
        const params = new URLSearchParams();
        if (taskId) {
            params.append("task_id", taskId);
        }

        return this.base.request<LabelingModel[]>(
            `/projects/${projectId}/finetuned_models?${params.toString()}`
        );
    }

    async update(
        modelId: string,
        data: Partial<LabelingModel>
    ): Promise<LabelingModel> {
        return this.base.request<LabelingModel, Partial<LabelingModel>>(
            `/finetuned_models/${modelId}`,
            {
                method: "PATCH",
                data,
            }
        );
    }

    /**
     * Delete a finetuned model
     *
     * @example
     * ```ts
     * await refuel.finetunedModels.delete(modelId);
     * ```
     */
    async delete(modelId: string): Promise<void> {
        return this.base.request<void>(`/finetuned_models/${modelId}`, {
            method: "DELETE",
        });
    }

    /**
     * Check if a task is trainable
     *
     * @example
     * ```ts
     * const isTrainable = await refuel.finetunedModels.isTaskTrainable(taskId);
     * ```
     */
    async isTaskTrainable(taskId: string): Promise<boolean> {
        const response = await this.base.request<{ trainable: boolean }>(
            `/tasks/${taskId}/trainable`
        );

        return response.trainable;
    }
}
