import { RefuelBase } from "../RefuelBase";
import {
    Dataset,
    DatasetItemLabels,
    DatasetItemLabelsUpdate,
    LabelListOptions,
} from "../types";

export class Labels {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    private getLabelsFromResponse(response: Dataset): DatasetItemLabels {
        const labels = response.items[0].labels;

        if (!labels) {
            throw new Error("No labels found");
        }

        return labels;
    }

    /**
     * Get labels for a specific item
     *
     * @example
     * ```ts
     * const labels = await refuel.labels.list(taskId, datasetId, itemId);
     * ```
     *
     * @example
     * You can optionally specify a specific model
     * ```ts
     * const labels = await refuel.labels.list(taskId, datasetId, itemId, {
     *     modelId: "3f9d7a28-4e6c-42d5-9bcd-8ecf4b9f6a2d",
     * });
     * ```
     *
     * @example
     * You can optionally label just a specific subtask
     * ```ts
     * const labels = await refuel.labels.list(taskId, datasetId, itemId, {
     *     subtaskId: "7b9e4f12-8d53-4691-b8c1-2a384f7e5d9c",
     * });
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

        const response = await this.base.request<Dataset>({
            method: "GET",
            endpoint: `/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label?${params.toString()}`,
        });

        return this.getLabelsFromResponse(response);
    }

    /**
     * Update labels for a specific item
     *
     * @example
     * Update a label without an explanation
     * ```ts
     * await refuel.labels.update(taskId, datasetId, itemId, {
     *     "3f9d7a28-4e6c-42d5-9bcd-8ecf4b9f6a2d": {
     *         label: "positive"
     *     }
     * });
     * ```
     * @example
     * Update a label with an explanation
     * ```ts
     * await refuel.labels.update(taskId, datasetId, itemId, {
     *     "3f9d7a28-4e6c-42d5-9bcd-8ecf4b9f6a2d": {
     *         label: "positive",
     *         explanation: "The text expresses a clearly positive sentiment"
     *     }
     * });
     * ```
     *
     * @example
     * Update just an explanation
     * ```ts
     * await refuel.labels.update(taskId, datasetId, itemId, {
     *     "3f9d7a28-4e6c-42d5-9bcd-8ecf4b9f6a2d": {
     *         explanation: "The text expresses a clearly positive sentiment"
     *     }
     * });
     * ```
     */
    async update(
        taskId: string,
        datasetId: string,
        itemId: string,
        labels: DatasetItemLabelsUpdate
    ): Promise<DatasetItemLabels> {
        const response = await this.base.request<Dataset>({
            method: "POST",
            endpoint: `/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label`,
            data: labels,
        });

        return this.getLabelsFromResponse(response);
    }

    /**
     * Approve labels for a specific item
     *
     * @example
     * ```ts
     * await refuel.labels.approve(taskId, datasetId, itemId);
     * ```
     *
     * @example
     * You can optionally approve labels for just a specific subtask
     * ```ts
     * await refuel.labels.approve(taskId, datasetId, itemId, subtaskId);
     * ```
     */
    async approve(
        taskId: string,
        datasetId: string,
        itemId: string,
        subtaskId?: string
    ): Promise<DatasetItemLabels> {
        const existingLabels = await this.list(taskId, datasetId, itemId);

        let updatedLabels: DatasetItemLabelsUpdate = {};

        if (subtaskId) {
            const existingSubtaskLabels = existingLabels[subtaskId];

            if (!existingSubtaskLabels) {
                throw new Error(`No labels found for subtask ${subtaskId}`);
            }

            updatedLabels[subtaskId] = existingSubtaskLabels;
        } else {
            updatedLabels = existingLabels;
        }

        return this.update(taskId, datasetId, itemId, updatedLabels);
    }

    /**
     * Generates an explanation for why a given label was selected
     *
     * @example
     * ```ts
     * await refuel.labels.generateExplanations(taskId, datasetId, itemId);
     * ```
     *
     * @example
     * You can optionally generate explanations for just a specific subtask
     * ```ts
     * await refuel.labels.generateExplanations(taskId, datasetId, itemId, subtaskId);
     * ```
     */
    async generateExplanations(
        taskId: string,
        datasetId: string,
        itemId: string,
        subtaskId?: string
    ): Promise<DatasetItemLabels> {
        const params = new URLSearchParams();
        params.append("generate_missing_explanations", "true");

        if (subtaskId) {
            params.append("subtask_id", subtaskId);
        }

        const response = await this.base.request<Dataset>({
            method: "GET",
            endpoint: `/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label?${params.toString()}`,
        });

        return this.getLabelsFromResponse(response);
    }
}
