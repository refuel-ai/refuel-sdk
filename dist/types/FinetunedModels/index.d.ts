import { RefuelBase } from "../RefuelBase";
import { LabelingModel, FinetunedModelCreateOptions } from "../types";
export declare class FinetunedModels {
    private base;
    constructor(base: RefuelBase);
    create(data: FinetunedModelCreateOptions): Promise<LabelingModel>;
    get(modelId: string): Promise<LabelingModel>;
    list(projectId: string, taskId?: string): Promise<LabelingModel[]>;
    update(modelId: string, data: Partial<LabelingModel>): Promise<LabelingModel>;
    delete(modelId: string): Promise<void>;
}
