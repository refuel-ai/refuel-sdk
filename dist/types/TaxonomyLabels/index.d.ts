import { RefuelBase } from "../RefuelBase";
import { TaxonomyLabelsResponse, TaxonomyLabel, TaxonomyLabelData } from "../types";
/**
 * Handles operations related to taxonomy labels.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class TaxonomyLabels {
    private readonly base;
    constructor(base: RefuelBase);
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
    create(taskId: string, taxonomyId: string, labels: TaxonomyLabelData | TaxonomyLabelData[]): Promise<void>;
    /**
     * List all labels in a taxonomy
     *
     * @example
     * ```ts
     * const labels = await refuel.taxonomyLabels.list(taskId, taxonomyId);
     * ```
     */
    list(taskId: string, taxonomyId: string, options?: {
        filter?: string;
        offset?: number;
        maxItems?: number;
    }): Promise<TaxonomyLabelsResponse>;
    /**
     * Update a label in a taxonomy
     *
     * @example
     * ```ts
     * const label = await refuel.taxonomyLabels.update(taskId, taxonomyId, labelId, { name: "New Name" });
     * ```
     */
    update(taskId: string, taxonomyId: string, labelId: string, data: Partial<TaxonomyLabelData>): Promise<TaxonomyLabel>;
    /**
     * Delete a label from a taxonomy
     *
     * @example
     * ```ts
     * await refuel.taxonomyLabels.delete(taskId, taxonomyId, labelId);
     * ```
     */
    delete(taskId: string, taxonomyId: string, labelId: string): Promise<void>;
}
