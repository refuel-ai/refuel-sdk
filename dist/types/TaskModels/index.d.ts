import { RefuelBase } from "../RefuelBase";
import { LabelingModel } from "../types";
export declare class TaskModels {
    private base;
    constructor(base: RefuelBase);
    list(taskId: string): Promise<LabelingModel[]>;
}
