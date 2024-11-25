import { RefuelBase } from "../RefuelBase";
import { LabelingModel, FinetunedModelCreateOptions } from "../types";

export class FinetunedModels {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async create(data: FinetunedModelCreateOptions): Promise<LabelingModel> {
        return this.base.request<LabelingModel>({
            method: "POST",
            endpoint: `/projects/${data.project_id}/finetuned_models`,
            data,
        });
    }

    async get(modelId: string): Promise<LabelingModel> {
        return this.base.request<LabelingModel>({
            method: "GET",
            endpoint: `/finetuned_models/${modelId}`,
        });
    }

    async list(projectId: string, taskId?: string): Promise<LabelingModel[]> {
        const params = new URLSearchParams();
        if (taskId) {
            params.append("task_id", taskId);
        }

        return this.base.request<LabelingModel[]>({
            method: "GET",
            endpoint: `/projects/${projectId}/finetuned_models?${params.toString()}`,
        });
    }

    async update(
        modelId: string,
        data: Partial<LabelingModel>
    ): Promise<LabelingModel> {
        return this.base.request<LabelingModel, Partial<LabelingModel>>({
            method: "PATCH",
            endpoint: `/finetuned_models/${modelId}`,
            data,
        });
    }

    async delete(modelId: string): Promise<void> {
        return this.base.request<void>({
            method: "DELETE",
            endpoint: `/finetuned_models/${modelId}`,
        });
    }
}
