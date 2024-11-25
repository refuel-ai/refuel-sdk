import { RefuelBase } from "../RefuelBase";
import { Dataset, DatasetItemsOptions } from "../types";
export declare class DatasetItems {
    private readonly base;
    constructor(base: RefuelBase);
    create(datasetId: string, data: Record<string, unknown>[]): Promise<Dataset>;
    get(datasetId: string, itemId: string): Promise<Record<string, string>>;
    list(datasetId: string, options?: DatasetItemsOptions): Promise<Dataset[]>;
    delete(datasetId: string, itemId: string): Promise<void>;
}
