import { RefuelBase } from "../RefuelBase";
import { Dataset, DatasetItemsOptions } from "../types";
export declare class DatasetItems {
    private readonly base;
    constructor(base: RefuelBase);
    /**
     * Add data to a dataset
     *
     * @example
     * ```ts
     * const dataset = await refuel.datasetItems.create(datasetId, [{ "name": "John Doe" }, { "name": "Jane Doe" }]);
     * ```
     */
    create(datasetId: string, data: Record<string, unknown>[]): Promise<Dataset>;
    /**
     * Get a dataset item by ID
     *
     * @example
     * ```ts
     * const item = await refuel.datasetItems.get(datasetId, itemId);
     * ```
     */
    get(datasetId: string, itemId: string): Promise<Record<string, string>>;
    list(datasetId: string, options?: DatasetItemsOptions): Promise<Dataset[]>;
    /**
     * Delete a dataset item
     *
     * @example
     * ```ts
     * await refuel.datasetItems.delete(datasetId, itemId);
     * ```
     */
    delete(datasetId: string, itemId: string): Promise<void>;
}
