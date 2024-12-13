import { RefuelBase } from "../RefuelBase";
import { Dataset, DatasetFromList } from "../types";
/**
 * Handles operations related to datasets.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class Datasets {
    private readonly base;
    constructor(base: RefuelBase);
    /**
     * Get a dataset by ID
     *
     * @example
     * ```ts
     * const dataset = await refuel.datasets.get(datasetId);
     * ```
     */
    get(datasetId: string): Promise<Dataset>;
    /**
     * List all datasets
     *
     * @example
     * ```ts
     * const datasets = await refuel.datasets.list();
     * ```
     */
    list(projectId?: string): Promise<DatasetFromList[]>;
    /**
     * Delete a dataset
     *
     * @example
     * ```ts
     * await refuel.datasets.delete(datasetId);
     * ```
     */
    delete(datasetId: string): Promise<void>;
}
