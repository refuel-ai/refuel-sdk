import { RefuelBase } from "../RefuelBase";
import {
    Dataset,
    DatasetLabeled,
    DatasetUnlabeled,
    EvalsetSamplingStrategy,
    GetDatasetItemOptions,
    LabeledDatasetItem,
    ListDatasetItemsOptions,
    SamplingEvent,
    SQLFilter,
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

        const response = await this.base.request<
            T extends { taskId: string }
                ? LabeledDatasetItem
                : Record<string, unknown>[]
        >(`${path}?${params.toString()}`);

        if (Array.isArray(response)) {
            return response[0];
        }

        return response;
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
    async delete(
        itemId: string | string[],
        options: Pick<
            ListDatasetItemsOptions,
            "datasetId" | "seedSet" | "evalSet" | "taskId"
        >
    ): Promise<void> {
        const itemIds = Array.isArray(itemId) ? itemId : [itemId];

        let basePath: string;

        if (options.taskId && options.seedSet) {
            basePath = `/tasks/${options.taskId}/seedset/items`;
        } else if (options.taskId && options.evalSet) {
            basePath = `/tasks/${options.taskId}/evalset/items`;
        } else if (options.datasetId) {
            basePath = `/datasets/${options.datasetId}/items`;
        } else {
            throw new Error("Missing required parameters");
        }

        await Promise.all(
            itemIds.map((id) =>
                this.base.request<void>(`${basePath}/${id}`, {
                    method: "DELETE",
                })
            )
        );
    }

    async addToEvalSet(
        taskId: string,
        datasetId: string,
        options?: {
            itemId?: string | string[];
            samplingEvent?: SamplingEvent;
            filters?: SQLFilter[];
        }
    ) {
        if (options?.itemId) {
            const itemIds = Array.isArray(options.itemId)
                ? options.itemId
                : [options.itemId];

            return Promise.all(
                itemIds.map((id) => {
                    const params = new URLSearchParams({
                        dataset_id: datasetId,
                        item_id: id,
                    });
                    return this.base.request<void>(
                        `/tasks/${taskId}/evalset/items?${params.toString()}`,
                        {
                            method: "POST",
                        }
                    );
                })
            );
        }

        const params = new URLSearchParams({
            dataset_id: datasetId,
        });

        if (options?.filters) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }

        const data: SamplingEvent = {
            sample_strategy: EvalsetSamplingStrategy.NO_SAMPLING,
            ...options?.samplingEvent,
        };

        return this.base.request<void>(
            `/tasks/${taskId}/evalset/items?${params.toString()}`,
            {
                method: "POST",
                data,
            }
        );
    }
}
