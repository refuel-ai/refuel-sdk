import { RefuelBase } from "../RefuelBase";
import {
    TaxonomyLabelsResponse,
    TaxonomyLabel,
    TaxonomyLabelData,
} from "../types";

/**
 * Handles operations related to taxonomy labels.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class TaxonomyLabels {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Add labels to a taxonomy
     *
     * @example
     * ```ts
     * const label = await refuel.taxonomyLabels.create(taskId, taxonomyId, [
     *  { name: "Label 1" },
     *  { name: "Label 2" },
     * ]);
     * ```
     */
    async create(
        taskId: string,
        taxonomyId: string,
        labels: TaxonomyLabelData | TaxonomyLabelData[]
    ): Promise<void> {
        const data = new FormData();

        data.append(
            "labels",
            JSON.stringify(Array.isArray(labels) ? labels : [labels])
        );

        return this.base.request<void>(
            `/tasks/${taskId}/taxonomies/${taxonomyId}`,
            {
                method: "POST",
                data,
            }
        );
    }

    /**
     * List all labels in a taxonomy
     *
     * @example
     * ```ts
     * const labels = await refuel.taxonomyLabels.list(taskId, taxonomyId);
     * ```
     */
    async list(
        taskId: string,
        taxonomyId: string,
        options?: {
            filter?: string;
            offset?: number;
            maxItems?: number;
        }
    ): Promise<TaxonomyLabelsResponse> {
        const params = new URLSearchParams();

        if (options?.offset) {
            params.append("offset", options.offset.toString());
        }

        if (options?.maxItems) {
            params.append("max_items", options.maxItems.toString());
        }

        if (options?.filter) {
            params.append("filter", options?.filter);
        }

        return this.base.request<TaxonomyLabelsResponse>(
            `/tasks/${taskId}/taxonomies/${taxonomyId}?${params.toString()}`
        );
    }

    /**
     * Update a label in a taxonomy
     *
     * @example
     * ```ts
     * const label = await refuel.taxonomyLabels.update(taskId, taxonomyId, labelId, { name: "New Name" });
     * ```
     */
    async update(
        taskId: string,
        taxonomyId: string,
        labelId: string,
        data: Partial<TaxonomyLabelData>
    ): Promise<TaxonomyLabel> {
        return this.base.request<TaxonomyLabel>(
            `/tasks/${taskId}/taxonomies/${taxonomyId}/labels/${labelId}`,
            {
                method: "PATCH",
                data,
            }
        );
    }

    /**
     * Delete a label from a taxonomy
     *
     * @example
     * ```ts
     * await refuel.taxonomyLabels.delete(taskId, taxonomyId, labelId);
     * ```
     */
    async delete(
        taskId: string,
        taxonomyId: string,
        labelId: string
    ): Promise<void> {
        return this.base.request<void>(
            `/tasks/${taskId}/taxonomies/${taxonomyId}/labels/${labelId}`,
            {
                method: "DELETE",
            }
        );
    }
}
