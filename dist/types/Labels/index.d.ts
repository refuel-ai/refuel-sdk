import { RefuelBase } from "../RefuelBase";
import { DatasetItemLabels, DatasetItemLabelsUpdate, LabelListOptions } from "../types";
export declare class Labels {
    private base;
    constructor(base: RefuelBase);
    private getLabelsFromResponse;
    list(taskId: string, datasetId: string, itemId: string, options?: LabelListOptions): Promise<DatasetItemLabels>;
    update(taskId: string, datasetId: string, itemId: string, labels: DatasetItemLabelsUpdate): Promise<DatasetItemLabels>;
    approve(taskId: string, datasetId: string, itemId: string): Promise<DatasetItemLabels>;
    generateExplanations(taskId: string, datasetId: string, itemId: string, subtaskId?: string): Promise<DatasetItemLabels>;
}
