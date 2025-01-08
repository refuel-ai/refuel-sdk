import { RefuelBase } from "../RefuelBase";
import { Dataset, DatasetLabeled, DatasetUnlabeled, GetDatasetItemOptions, LabeledDatasetItem, ListDatasetItemsOptions } from "../types";
export declare class DatasetItems {
    private readonly base;
    /** @internal */
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
    get<T extends GetDatasetItemOptions>(datasetId: string, itemId: string, options?: T): Promise<Record<string, unknown> | LabeledDatasetItem>;
    list<T extends ListDatasetItemsOptions>(options: T): Promise<T extends {
        taskId: string;
    } ? DatasetLabeled : DatasetUnlabeled>;
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
