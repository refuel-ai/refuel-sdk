import { RefuelBase } from "../RefuelBase";
import { TaxonomyLabelData, TaxonomyLabelsResponse } from "../types";
/**
 * Handles operations related to taxonomies.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class Taxonomies {
    private readonly base;
    constructor(base: RefuelBase);
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
    create(taskId: string, labels?: TaxonomyLabelData | TaxonomyLabelData[]): Promise<TaxonomyLabelsResponse>;
    get(taskId: string, taxonomyId: string): Promise<TaxonomyLabelsResponse>;
    /**
     * Delete a taxonomy
     *
     * @example
     * ```ts
     * await refuel.taxonomies.delete(taskId, taxonomyId);
     * ```
     */
    delete(taskId: string, taxonomyId: string): Promise<void>;
    /**
     * Create a duplicate of an existing taxonomy
     *
     * @example
     * ```ts
     * const taxonomy = await refuel.taxonomies.duplicate(taskId, taxonomyId);
     * ```
     */
    duplicate(taskId: string, taxonomyId: string): Promise<TaxonomyLabelsResponse>;
}
