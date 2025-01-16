import { RefuelBase } from "../RefuelBase";
import { CreateDatasetOptions, Dataset, DatasetFromList } from "../types";

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
     * Create a dataset
     *
     * @example
     * ```ts
     * const dataset = await refuel.datasets.create(projectId, {
     *     name: "My Dataset",
     *     source: "csv",
     *     source_path: "s3://my-bucket/my-file.csv"
     * });
     * ```
     */
    async create(
        projectId: string,
        options: CreateDatasetOptions
    ): Promise<Dataset> {
        const data = new FormData();

        data.append("name", options.name);

        if (options.source_path) {
            data.append("source_path", options.source_path);
        }

        if (options.source) {
            data.append("source", options.source);
        }

        if (options.redact_pii) {
            data.append("redact_pii", options.redact_pii.toString());
        }

        return this.base.request<Dataset>(`/projects/${projectId}/datasets`, {
            method: "POST",
            data,
        });
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

    /**
     * Update a dataset
     *
     * @example
     * ```ts
     * await refuel.datasets.update(datasetId, { scheduled_ids: ["taskId"] });
     * ```
     */
    async update(
        datasetId: string,
        data: Partial<Pick<Dataset, "scheduled_ids">>
    ) {
        return this.base.request<Dataset>(`/datasets/${datasetId}`, {
            method: "PATCH",
            data,
        });
    }
}
