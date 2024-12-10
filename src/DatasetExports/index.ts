import { RefuelBase } from "../RefuelBase";
import { ExportDatasetOptions, ExportDatasetResponse } from "../types";

export class DatasetExports {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async get(exportId: string, datasetId: string): Promise<string> {
        return this.base.request<string>(
            `/datasets/${datasetId}/exports/${exportId}`
        );
    }

    async create(
        datasetId: string,
        options?: ExportDatasetOptions
    ): Promise<ExportDatasetResponse> {
        const params = new URLSearchParams();

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
            `/datasets/${datasetId}/exports?${params.toString()}`,
            {
                method: "POST",
            }
        );
    }
}
