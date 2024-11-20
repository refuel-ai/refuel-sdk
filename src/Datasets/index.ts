import { RefuelBase } from "../RefuelBase";
import { Dataset, DatasetFromList } from "../types";

export class Datasets {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async get(datasetId: string): Promise<Dataset> {
        return this.base.request<Dataset>({
            method: "GET",
            endpoint: `/datasets/${datasetId}`,
        });
    }

    async list(projectId?: string): Promise<DatasetFromList[]> {
        const params = new URLSearchParams();

        if (projectId) {
            params.append("project_id", projectId);
        }

        return this.base.request<DatasetFromList[]>({
            method: "GET",
            endpoint: `/datasets?${params.toString()}`,
        });
    }

    async delete(datasetId: string): Promise<void> {
        return this.base.request<void>({
            method: "DELETE",
            endpoint: `/datasets/${datasetId}`,
        });
    }
}
