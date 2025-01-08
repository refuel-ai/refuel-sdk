import { RefuelBase } from "../RefuelBase";
import {
    Dataset,
    DatasetLabeled,
    DatasetUnlabeled,
    GetDatasetItemOptions,
    LabeledDatasetItem,
    ListDatasetItemsOptions,
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
    async get<T extends GetDatasetItemOptions>(
        datasetId: string,
        itemId: string,
        options?: T
    ) {
        const params = new URLSearchParams();

        if (options?.taskId) {
            params.append("task_id", options.taskId);
        }

        if (options?.modelId) {
            params.append("model_id", options.modelId);
        }

        const path = options?.taskId
            ? `/tasks/${options.taskId}/datasets/${datasetId}/items/${itemId}`
            : `/datasets/${datasetId}/items/${itemId}`;

        return (
            await this.base.request<
                T extends { taskId: string }
                    ? LabeledDatasetItem[]
                    : Record<string, unknown>[]
            >(`${path}?${params.toString()}`)
        )[0];
    }

    async list<T extends ListDatasetItemsOptions>(options: T) {
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
    async delete(datasetId: string, itemId: string | string[]): Promise<void> {
        const itemIds = Array.isArray(itemId) ? itemId : [itemId];

        await Promise.all(
            itemIds.map((id) =>
                this.base.request<void>(`/datasets/${datasetId}/items/${id}`, {
                    method: "DELETE",
                })
            )
        );
    }
}
