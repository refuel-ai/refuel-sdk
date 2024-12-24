import { RefuelBase } from "../RefuelBase";
import { Dataset, DatasetFromList } from "../types";

/**
 * Handles operations related to datasets.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class Datasets {
    private readonly base: RefuelBase;

    /** @internal */
    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Get a dataset by ID
     *
     * @example
     * ```ts
     * const dataset = await refuel.datasets.get(datasetId);
     * ```
     */
    async get(datasetId: string): Promise<Dataset> {
        return this.base.request<Dataset>(`/datasets/${datasetId}`);
    }

    /**
     * List all datasets
     *
     * @example
     * ```ts
     * const datasets = await refuel.datasets.list();
     * ```
     */
    async list(projectId?: string): Promise<DatasetFromList[]> {
        const params = new URLSearchParams();

        if (projectId) {
            params.append("project_id", projectId);
        }

        return this.base.request<DatasetFromList[]>(
            `/datasets?${params.toString()}`
        );
    }

    /**
     * Delete a dataset
     *
     * @example
     * ```ts
     * await refuel.datasets.delete(datasetId);
     * ```
     */
    async delete(datasetId: string): Promise<void> {
        return this.base.request<void>(`/datasets/${datasetId}`, {
            method: "DELETE",
        });
    }
}
