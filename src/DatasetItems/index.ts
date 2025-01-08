import { RefuelBase } from "../RefuelBase";
import {
    Dataset,
    DatasetItemsOptions,
    DatasetLabeled,
    DatasetUnlabeled,
} from "../types";

export class DatasetItems {
    private readonly base: RefuelBase;

    /** @internal */
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

    async list<T extends DatasetItemsOptions>(options: T) {
        const params = new URLSearchParams();

        let path: string | undefined;

        if (options.taskId && options.evalSet) {
            path = `/tasks/${options.taskId}/evalset`;
        } else if (options.taskId && options.seedSet) {
            path = `/tasks/${options.taskId}/seedset`;
        } else if (options.taskId && options.datasetId) {
            path = `/tasks/${options.taskId}/datasets/${options.datasetId}`;
        } else if (options.datasetId) {
            path = `/datasets/${options.datasetId}`;
        } else {
            throw new Error("Missing required parameters");
        }

        if (options.filters) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }

        if (options.maxItems) {
            params.append("max_items", options.maxItems.toString());
        }

        if (options.orderBy) {
            const orderBys = Array.isArray(options.orderBy)
                ? options.orderBy
                : [options.orderBy];

            orderBys.forEach((orderBy) => {
                params.append("order_bys", JSON.stringify(orderBy));
            });
        }

        if (options.offset) {
            params.append("offset", options.offset.toString());
        }

        return this.base.request<
            T extends { taskId: string } ? DatasetLabeled : DatasetUnlabeled
        >(`${path}?${params.toString()}`);
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
