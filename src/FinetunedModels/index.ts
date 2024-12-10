import { RefuelBase } from "../RefuelBase";
import { LabelingModel, FinetunedModelCreateOptions } from "../types";

export class FinetunedModels {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async create(data: FinetunedModelCreateOptions): Promise<LabelingModel> {
        return this.base.request<LabelingModel>(
            `/projects/${data.project_id}/finetuned_models`,
            {
                method: "POST",
                data,
            }
        );
    }

    async get(modelId: string): Promise<LabelingModel> {
        return this.base.request<LabelingModel>(`/finetuned_models/${modelId}`);
    }

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

    async delete(modelId: string): Promise<void> {
        return this.base.request<void>(`/finetuned_models/${modelId}`, {
            method: "DELETE",
        });
    }
}
