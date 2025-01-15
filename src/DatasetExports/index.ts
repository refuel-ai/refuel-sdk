import { RefuelBase } from "../RefuelBase";
import {
    ExportDatasetOptions,
    ExportDatasetResponse,
    GetDatasetExportOptions,
} from "../types";

/**
 * Handles operations related to dataset exports.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class DatasetExports {
    private readonly base: RefuelBase;

    /** @internal */
    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Get the URL of a dataset export
     *
     * @example
     * ```ts
     * const export = await refuel.datasetExports.get(exportId, { datasetId });
     * ```
     */
    async get(
        exportId: string,
        options: GetDatasetExportOptions
    ): Promise<string> {
        let path;

        if (options.evalSet) {
            if (!options.taskId) {
                throw new Error(
                    "Task ID is required for evaluation set exports"
                );
            }
            path = `/tasks/${options.taskId}/evalset/exports/${exportId}`;
        } else if (options.seedSet) {
            if (!options.taskId) {
                throw new Error("Task ID is required for seed set exports");
            }
            path = `/tasks/${options.taskId}/seedset/exports/${exportId}`;
        } else {
            if (!options.datasetId) {
                throw new Error("Dataset ID is required for dataset exports");
            }
            path = `/datasets/${options.datasetId}/exports/${exportId}`;
        }

        if (!path) {
            throw new Error("Invalid export options");
        }

        return this.base.request<string>(path);
    }

    /**
     * Email a secure, expiring link to download a dataset
     *
     * @example
     * ```ts
     * const export = await refuel.datasetExports.create({ datasetId: "123", email: "example@example.com" });
     * ```
     */
    async create(
        options: ExportDatasetOptions
    ): Promise<ExportDatasetResponse> {
        const params = new URLSearchParams();

        let path;

        if (options.evalSet) {
            if (!options.taskId) {
                throw new Error(
                    "Task ID is required for evaluation set exports"
                );
            }
            path = `/tasks/${options.taskId}/evalset/exports`;
        } else if (options.seedSet) {
            if (!options.taskId) {
                throw new Error("Task ID is required for seed set exports");
            }
            path = `/tasks/${options.taskId}/seedset/exports`;
        } else {
            if (!options.datasetId) {
                throw new Error("Dataset ID is required for dataset exports");
            }
            path = `/datasets/${options.datasetId}/exports`;
        }

        if (!path) {
            throw new Error("Invalid export options");
        }

        if (options?.email) {
            params.append("email", options.email);
        }

        if (options?.taskId) {
            params.append("task_id", options.taskId);
        }

        if (options?.includeUUID !== undefined) {
            params.append("include_uuid", options.includeUUID.toString());
        }

        if (options?.includeLabels !== undefined) {
            params.append("include_labels", options.includeLabels.toString());
        }

        if (options?.taskRunId) {
            params.append("task_run_id", options.taskRunId);
        }

        if (Array.isArray(options?.filters)) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }

        return this.base.request<ExportDatasetResponse>(
            `${path}?${params.toString()}`,
            {
                method: "POST",
            }
        );
    }
}
