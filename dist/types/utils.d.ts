import { RefuelAPIError } from "./RefuelBase";
import { DatasetLabeled, LabeledDatasetItem, Telemetry } from "./types";
export declare const isLabeledDatasetItem: (arg: unknown) => arg is LabeledDatasetItem;
export declare const isDatasetLabeled: (arg: unknown) => arg is DatasetLabeled;
export declare const isTelemetry: (arg: unknown) => arg is Telemetry;
export declare const isRefuelAPIError: (arg: unknown) => arg is RefuelAPIError;
