import { RefuelBase } from "../RefuelBase";
import {
    TaxonomyLabelData,
    TaxonomyLabelRequestBody,
    TaxonomyLabelsResponse,
} from "../types";

/**
 * Handles operations related to taxonomies.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class Taxonomies {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Create a taxonomy for a task
     *
     * @example
     * ```ts
     * const taxonomy = await refuel.taxonomies.create(taskId, [
     *  { name: "Label 1" },
     *  { name: "Label 2" },
     * ]);
     * ```
     */
    async create(
        taskId: string,
        labels: TaxonomyLabelData | TaxonomyLabelData[] = []
    ): Promise<TaxonomyLabelsResponse> {
        const data = {
            labels: Array.isArray(labels) ? labels : [labels],
        };

        return this.base.request<
            TaxonomyLabelsResponse,
            TaxonomyLabelRequestBody
        >(`/tasks/${taskId}/taxonomies`, {
            method: "POST",
            data,
        });
    }

    async get(taskId: string, taxonomyId: string) {
        return this.base.request<TaxonomyLabelsResponse>(
            `/tasks/${taskId}/taxonomies/${taxonomyId}`
        );
    }

    /**
     * Delete a taxonomy
     *
     * @example
     * ```ts
     * await refuel.taxonomies.delete(taskId, taxonomyId);
     * ```
     */
    async delete(taskId: string, taxonomyId: string): Promise<void> {
        return this.base.request<void>(
            `/tasks/${taskId}/taxonomies/${taxonomyId}`,
            {
                method: "DELETE",
            }
        );
    }

    /**
     * Create a duplicate of an existing taxonomy
     *
     * @example
     * ```ts
     * const taxonomy = await refuel.taxonomies.duplicate(taskId, taxonomyId);
     * ```
     */
    async duplicate(
        taskId: string,
        taxonomyId: string
    ): Promise<TaxonomyLabelsResponse> {
        return this.base.request<TaxonomyLabelsResponse>(
            `/tasks/${taskId}/taxonomies/${taxonomyId}/duplicate`,
            {
                method: "POST",
            }
        );
    }
}
