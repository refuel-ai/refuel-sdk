import { RefuelBase } from "../RefuelBase";
import { Dataset, DatasetItemsOptions } from "../types";

export class DatasetItems {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async create(
        datasetId: string,
        data: Record<string, unknown>[]
    ): Promise<Dataset> {
        return this.base.request<Dataset>({
            method: "POST",
            endpoint: `/datasets/${datasetId}/items`,
            data,
        });
    }

    async get(
        datasetId: string,
        itemId: string
    ): Promise<Record<string, string>> {
        return (
            await this.base.request<Record<string, string>[]>({
                method: "GET",
                endpoint: `/datasets/${datasetId}/items/${itemId}`,
            })
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

        return this.base.request<Dataset[]>({
            method: "GET",
            endpoint: `/datasets/${datasetId}?${params.toString()}`,
        });
    }

    async delete(datasetId: string, itemId: string): Promise<void> {
        return this.base.request<void>({
            method: "DELETE",
            endpoint: `/datasets/${datasetId}/items/${itemId}`,
        });
    }
}
