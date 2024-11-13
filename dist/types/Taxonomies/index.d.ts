import { RefuelBase } from "../RefuelBase";
import { TaxonomyLabelData, TaxonomyLabelsResponse } from "../types";
export declare class Taxonomies {
    private readonly base;
    constructor(base: RefuelBase);
    create(taskId: string, labels?: TaxonomyLabelData | TaxonomyLabelData[]): Promise<TaxonomyLabelsResponse>;
    get(taskId: string, taxonomyId: string): Promise<TaxonomyLabelsResponse>;
    delete(taskId: string, taxonomyId: string): Promise<void>;
}
