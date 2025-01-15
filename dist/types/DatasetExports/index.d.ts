import { RefuelBase } from "../RefuelBase";
import { ExportDatasetOptions, ExportDatasetResponse, GetDatasetExportOptions } from "../types";
/**
 * Handles operations related to dataset exports.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class DatasetExports {
    private readonly base;
    /** @internal */
    constructor(base: RefuelBase);
    /**
     * Get the URL of a dataset export
     *
     * @example
     * ```ts
     * const export = await refuel.datasetExports.get(exportId, { datasetId });
     * ```
     */
    get(exportId: string, options: GetDatasetExportOptions): Promise<string>;
    /**
     * Email a secure, expiring link to download a dataset
     *
     * @example
     * ```ts
     * const export = await refuel.datasetExports.create({ datasetId: "123", email: "example@example.com" });
     * ```
     */
    create(options: ExportDatasetOptions): Promise<ExportDatasetResponse>;
}
