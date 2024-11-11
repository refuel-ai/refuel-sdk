import { RefuelBase } from "../RefuelBase";
import { Dataset } from "../types";
export declare class Datasets {
    private readonly base;
    constructor(base: RefuelBase);
    list(projectId?: string): Promise<Dataset[]>;
    delete(datasetId: string): Promise<void>;
}
