import { RefuelBase } from "../RefuelBase";
import { ExportDatasetOptions, ExportDatasetResponse } from "../types";
export declare class DatasetExports {
    private readonly base;
    constructor(base: RefuelBase);
    get(exportId: string, datasetId: string): Promise<string>;
    create(datasetId: string, options?: ExportDatasetOptions): Promise<ExportDatasetResponse>;
}
