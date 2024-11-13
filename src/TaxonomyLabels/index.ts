import { RefuelBase } from "../RefuelBase";
import {
    TaxonomyLabelsResponse,
    TaxonomyLabel,
    TaxonomyLabelData,
} from "../types";

export class TaxonomyLabels {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async create(
        taskId: string,
        taxonomyId: string,
        labels: TaxonomyLabelData | TaxonomyLabelData[]
    ): Promise<void> {
        const data = new FormData();

        data.append(
            "labels",
            JSON.stringify(Array.isArray(labels) ? labels : [labels])
        );

        return this.base.request<void>({
            method: "POST",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}`,
            data,
        });
    }

    async list(
        taskId: string,
        taxonomyId: string,
        options?: {
            filter?: string;
            offset?: number;
            maxItems?: number;
        }
    ): Promise<TaxonomyLabelsResponse> {
        const params = new URLSearchParams();

        if (options?.offset) {
            params.append("offset", options.offset.toString());
        }

        if (options?.maxItems) {
            params.append("max_items", options.maxItems.toString());
        }

        if (options?.filter) {
            params.append("filter", options?.filter);
        }

        return this.base.request<TaxonomyLabelsResponse>({
            method: "GET",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}?${params.toString()}`,
        });
    }

    async update(
        taskId: string,
        taxonomyId: string,
        labelId: string,
        data: Partial<TaxonomyLabelData>
    ): Promise<TaxonomyLabel> {
        return this.base.request<TaxonomyLabel>({
            method: "PATCH",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}/labels/${labelId}`,
            data,
        });
    }

    async delete(
        taskId: string,
        taxonomyId: string,
        labelId: string
    ): Promise<void> {
        return this.base.request<void>({
            method: "DELETE",
            endpoint: `/tasks/${taskId}/taxonomies/${taxonomyId}/labels/${labelId}`,
        });
    }
}
