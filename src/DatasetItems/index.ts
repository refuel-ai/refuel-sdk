import { RefuelBase } from "../RefuelBase";
import { Dataset, DatasetItemsOptions } from "../types";

export class DatasetItems {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Add data to a dataset
     *
     * @example
     * ```ts
     * const dataset = await refuel.datasetItems.create(datasetId, [{ "name": "John Doe" }, { "name": "Jane Doe" }]);
     * ```
     */
    async create(
        datasetId: string,
        data: Record<string, unknown>[]
    ): Promise<Dataset> {
        return this.base.request<Dataset>(`/datasets/${datasetId}/items`, {
            method: "POST",
            data,
        });
    }

    /**
     * Get a dataset item by ID
     *
     * @example
     * ```ts
     * const item = await refuel.datasetItems.get(datasetId, itemId);
     * ```
     */
    async get(
        datasetId: string,
        itemId: string
    ): Promise<Record<string, string>> {
        return (
            await this.base.request<Record<string, string>[]>(
                `/datasets/${datasetId}/items/${itemId}`
            )
        )[0];
    }

    async list(
        datasetId: string,
        options?: DatasetItemsOptions
    ): Promise<Dataset[]> {
        const params = new URLSearchParams();

        if (options?.filters) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }

        if (options?.maxItems) {
            params.append("max_items", options.maxItems.toString());
        }

        if (options?.orderBy) {
            options.orderBy.forEach((orderBy) => {
                params.append("order_bys", orderBy);
            });
        }

        if (options?.offset) {
            params.append("offset", options.offset.toString());
        }

        return this.base.request<Dataset[]>(
            `/datasets/${datasetId}?${params.toString()}`
        );
    }

    /**
     * Delete a dataset item
     *
     * @example
     * ```ts
     * await refuel.datasetItems.delete(datasetId, itemId);
     * ```
     */
    async delete(datasetId: string, itemId: string): Promise<void> {
        return this.base.request<void>(
            `/datasets/${datasetId}/items/${itemId}`,
            {
                method: "DELETE",
            }
        );
    }
}
