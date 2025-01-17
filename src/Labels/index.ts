import { RefuelBase } from "../RefuelBase";
import {
    DatasetItemLabels,
    DatasetItemLabelsUpdate,
    DatasetLabeled,
    LabelListOptions,
} from "../types";

/**
 * Handles operations related to labels.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class Labels {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    private getLabelsFromResponse(response: DatasetLabeled): DatasetItemLabels {
        const labels = response.items[0].labels;

        if (!labels) {
            throw new Error("No labels found");
        }

        return labels;
    }

    /**
     * List all labels for a dataset item
     *
     * @example
     * ```ts
     * const labels = await refuel.labels.list(taskId, datasetId, itemId);
     * ```
     */
    async list(
        taskId: string,
        datasetId: string,
        itemId: string,
        options?: LabelListOptions
    ): Promise<DatasetItemLabels> {
        const params = new URLSearchParams();

        if (options?.modelId) {
            params.append("model_id", options.modelId);
        }

        if (options?.subtaskId) {
            params.append("subtask_id", options.subtaskId);
        }

        if (typeof options?.generateMissingLabels === "boolean") {
            params.append(
                "generate_missing_labels",
                options.generateMissingLabels.toString()
            );
        }

        if (typeof options?.generateMissingExplanations === "boolean") {
            params.append(
                "generate_missing_explanations",
                options.generateMissingExplanations.toString()
            );
        }

        const response = await this.base.request<DatasetLabeled>(
            `/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label?${params.toString()}`
        );

        return this.getLabelsFromResponse(response);
    }

    /**
     * Update labels for a dataset item
     *
     * @example
     * ```ts
     * const labels = await refuel.labels.update(taskId, datasetId, itemId, { "subtask_id": "label_value" });
     * ```
     */
    async update(
        taskId: string,
        datasetId: string,
        itemId: string,
        labels: DatasetItemLabelsUpdate
    ): Promise<DatasetItemLabels> {
        const response = await this.base.request<DatasetLabeled>(
            `/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label`,
            {
                method: "POST",
                data: labels,
            }
        );

        return this.getLabelsFromResponse(response);
    }

    /**
     * Approve labels for a dataset item
     *
     * @example
     * ```ts
     * const labels = await refuel.labels.approve(taskId, datasetId, itemId, subtaskId);
     * ```
     */
    async approve(
        taskId: string,
        datasetId: string,
        itemId: string,
        options?: {
            subtaskId?: string;
            modelId?: string;
        }
    ): Promise<DatasetItemLabels> {
        const existingLabels = await this.list(
            taskId,
            datasetId,
            itemId,
            options
        );

        let updatedLabels: DatasetItemLabelsUpdate = {};

        if (options?.subtaskId) {
            const existingSubtaskLabels = existingLabels[options.subtaskId];

            if (!existingSubtaskLabels) {
                throw new Error(
                    `No labels found for subtask ${options.subtaskId}`
                );
            }

            updatedLabels[options.subtaskId] = existingSubtaskLabels;
        } else {
            updatedLabels = existingLabels;
        }

        return this.update(taskId, datasetId, itemId, updatedLabels);
    }

    async generateExplanations(
        taskId: string,
        datasetId: string,
        itemId: string,
        options?: {
            subtaskId?: string;
            modelId?: string;
        }
    ): Promise<DatasetItemLabels> {
        const params = new URLSearchParams();
        params.append("generate_missing_explanations", "true");

        if (options?.subtaskId) {
            params.append("subtask_id", options.subtaskId);
        }

        if (options?.modelId) {
            params.append("model_id", options.modelId);
        }

        const response = await this.base.request<DatasetLabeled>(
            `/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label?${params.toString()}`
        );

        return this.getLabelsFromResponse(response);
    }
}
