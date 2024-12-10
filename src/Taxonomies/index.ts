import { RefuelBase } from "../RefuelBase";
import {
    TaxonomyLabelData,
    TaxonomyLabelRequestBody,
    TaxonomyLabelsResponse,
} from "../types";

export class Taxonomies {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async create(
        taskId: string,
        labels: TaxonomyLabelData | TaxonomyLabelData[] = []
    ): Promise<TaxonomyLabelsResponse> {
        const data = {
            labels: Array.isArray(labels) ? labels : [labels],
        };

        return this.base.request<
            TaxonomyLabelsResponse,
            TaxonomyLabelRequestBody
        >(`/tasks/${taskId}/taxonomies`, {
            method: "POST",
            data,
        });
    }

    async get(taskId: string, taxonomyId: string) {
        return this.base.request<TaxonomyLabelsResponse>(
            `/tasks/${taskId}/taxonomies/${taxonomyId}`
        );
    }

    async delete(taskId: string, taxonomyId: string): Promise<void> {
        return this.base.request<void>(
            `/tasks/${taskId}/taxonomies/${taxonomyId}`,
            {
                method: "DELETE",
            }
        );
    }

    async duplicate(
        taskId: string,
        taxonomyId: string
    ): Promise<TaxonomyLabelsResponse> {
        return this.base.request<TaxonomyLabelsResponse>(
            `/tasks/${taskId}/taxonomies/${taxonomyId}/duplicate`,
            {
                method: "POST",
            }
        );
    }
}
