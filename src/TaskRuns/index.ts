import { RefuelBase } from "../RefuelBase";
import {
    TaskRun,
    TaskRunCancelOptions,
    TaskRunCreateOptions,
    TaskRunListOptions,
} from "../types";

export class TaskRuns {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async create(
        taskId: string,
        options?: TaskRunCreateOptions
    ): Promise<TaskRun> {
        if (!options?.datasetId && !options?.evalSet) {
            throw new Error("Either datasetId or evalSet must be provided");
        }

        const params = new URLSearchParams();

        if (options?.limit) {
            params.append("limit", options.limit.toString());
        }

        if (options?.filters) {
            options.filters.forEach((filter) => {
                params.append("filters", JSON.stringify(filter));
            });
        }

        if (options?.modelIds?.length) {
            options.modelIds.forEach((modelId) => {
                params.append("model_ids", modelId);
            });
        }

        if (options?.datasetId) {
            params.append("dataset_id", options.datasetId);
        }

        const endpoint = options?.evalSet
            ? `/tasks/${taskId}/evalset/runs?${params.toString()}`
            : `/tasks/${taskId}/runs?${params.toString()}`;

        return this.base.request<TaskRun>(endpoint, {
            method: "POST",
        });
    }

    async cancel(taskId: string, options: TaskRunCancelOptions): Promise<void> {
        if (!options.datasetId && !options.evalSet) {
            throw new Error("Either datasetId or evalSet must be provided");
        }

        const params = new URLSearchParams();

        params.append("cancel_run", "true");

        if (options?.datasetId) {
            params.append("dataset_id", options.datasetId);
        }

        const endpoint = options?.evalSet
            ? `/tasks/${taskId}/evalset/runs`
            : `/tasks/${taskId}/runs?${params.toString()}`;

        return this.base.request<void>(endpoint, {
            method: "POST",
        });
    }

    async list(
        taskId: string,
        options?: TaskRunListOptions
    ): Promise<TaskRun[]> {
        let endpoint = `/tasks/${taskId}/runs`;

        if (options?.datasetId && options?.evalSet) {
            throw new Error("Cannot provide both datasetId and evalSet");
        }

        if (options?.datasetId) {
            endpoint += `/${options.datasetId}`;
        } else if (options?.evalSet) {
            endpoint = `/tasks/${taskId}/evalset/runs`;
        }

        const response = await this.base.request<TaskRun | TaskRun[]>(endpoint);

        if (Array.isArray(response)) {
            return response;
        }

        return [response];
    }
}
