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

        const response = await this.base.request<Dataset>(
            `/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label?${params.toString()}`
        );

        return this.getLabelsFromResponse(response);
    }

    async update(
        taskId: string,
        datasetId: string,
        itemId: string,
        labels: DatasetItemLabelsUpdate
    ): Promise<DatasetItemLabels> {
        const response = await this.base.request<Dataset>(
            `/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label`,
            {
                method: "POST",
                data: labels,
            }
        );

        return this.getLabelsFromResponse(response);
    }

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

        const response = await this.base.request<Dataset>(
            `/tasks/${taskId}/datasets/${datasetId}/items/${itemId}/label?${params.toString()}`
        );

        return this.getLabelsFromResponse(response);
    }
}
