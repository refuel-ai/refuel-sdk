import { RefuelBase } from "../RefuelBase";
import { LabelingModel } from "../types";

export class TaskModels {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async list(taskId: string): Promise<LabelingModel[]> {
        const response = await this.base.request<{ models: LabelingModel[] }>(
            `/tasks/${taskId}/models`
        );
        return response.models;
    }
}
