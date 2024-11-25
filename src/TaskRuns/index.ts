import { RefuelBase } from "../RefuelBase";
import { TaskRun, TaskRunOptions } from "../types";

export class TaskRuns {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async list(taskId: string, options?: TaskRunOptions): Promise<TaskRun[]> {
        let endpoint = `/tasks/${taskId}/runs`;

        if (options?.datasetId && options?.evalSet) {
            throw new Error("Cannot provide both datasetId and evalSet");
        }

        if (options?.datasetId) {
            endpoint += `/${options.datasetId}`;
        } else if (options?.evalSet) {
            endpoint = `/tasks/${taskId}/evalset/runs`;
        }

        const response = await this.base.request<TaskRun | TaskRun[]>({
            method: "GET",
            endpoint,
        });

        if (Array.isArray(response)) {
            return response;
        }

        return [response];
    }
}
