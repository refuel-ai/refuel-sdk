import { RefuelBase } from "../RefuelBase";
import { TaxonomyLabelsResponse, TaxonomyLabel, TaxonomyLabelData } from "../types";
export declare class TaxonomyLabels {
    private readonly base;
    constructor(base: RefuelBase);
    create(taskId: string, taxonomyId: string, labels: TaxonomyLabelData | TaxonomyLabelData[]): Promise<void>;
    list(taskId: string, taxonomyId: string, options?: {
        filter?: string;
        offset?: number;
        maxItems?: number;
    }): Promise<TaxonomyLabelsResponse>;
    update(taskId: string, taxonomyId: string, labelId: string, data: Partial<TaxonomyLabelData>): Promise<TaxonomyLabel>;
    delete(taskId: string, taxonomyId: string, labelId: string): Promise<void>;
}
