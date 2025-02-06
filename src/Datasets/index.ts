import { RefuelBase } from "../RefuelBase";
import {
    CreateDatasetOptions,
    Dataset,
    DatasetFromList,
    DatasetSchema,
} from "../types";

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
     * Infer a dataset schema
     *
     * @example
     * ```ts
     * const schema = await refuel.datasets.inferSchema("file", "s3://my-bucket/my-file.csv");
     * ```
     */
    async inferSchema(
        integrationId: string,
        sourcePath: string
    ): Promise<DatasetSchema> {
        const params = new URLSearchParams({
            integration_id: integrationId,
            source_path: sourcePath,
        });

        return this.base.request<DatasetSchema>(
            `/datasets/infer_schema?${params.toString()}`
        );
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

        if (options.integrationId) {
            data.append("integration_id", options.integrationId);
        }

        if (options.redactPII) {
            data.append("redact_pii", options.redactPII.toString());
        }

        if (options.sourcePath) {
            data.append("source_path", options.sourcePath);
        }

        if (options.schema) {
            data.append("schema", options.schema);
        }

        if (options.source) {
            data.append("source", options.source);
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
