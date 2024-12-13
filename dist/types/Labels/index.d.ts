import { RefuelBase } from "../RefuelBase";
import { DatasetItemLabels, DatasetItemLabelsUpdate, LabelListOptions } from "../types";
/**
 * Handles operations related to labels.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class Labels {
    private base;
    constructor(base: RefuelBase);
    private getLabelsFromResponse;
    /**
     * List all labels for a dataset item
     *
     * @example
     * ```ts
     * const labels = await refuel.labels.list(taskId, datasetId, itemId);
     * ```
     */
    list(taskId: string, datasetId: string, itemId: string, options?: LabelListOptions): Promise<DatasetItemLabels>;
    /**
     * Update labels for a dataset item
     *
     * @example
     * ```ts
     * const labels = await refuel.labels.update(taskId, datasetId, itemId, { "subtask_id": "label_value" });
     * ```
     */
    update(taskId: string, datasetId: string, itemId: string, labels: DatasetItemLabelsUpdate): Promise<DatasetItemLabels>;
    /**
     * Approve labels for a dataset item
     *
     * @example
     * ```ts
     * const labels = await refuel.labels.approve(taskId, datasetId, itemId, subtaskId);
     * ```
     */
    approve(taskId: string, datasetId: string, itemId: string, options?: {
        subtaskId?: string;
        modelId?: string;
    }): Promise<DatasetItemLabels>;
    generateExplanations(taskId: string, datasetId: string, itemId: string, options?: {
        subtaskId?: string;
        modelId?: string;
    }): Promise<DatasetItemLabels>;
}
