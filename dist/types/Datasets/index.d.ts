import { RefuelBase } from "../RefuelBase";
import { Dataset, DatasetFromList } from "../types";
export declare class Datasets {
    private readonly base;
    constructor(base: RefuelBase);
    get(datasetId: string): Promise<Dataset>;
    list(projectId?: string): Promise<DatasetFromList[]>;
    delete(datasetId: string): Promise<void>;
}
