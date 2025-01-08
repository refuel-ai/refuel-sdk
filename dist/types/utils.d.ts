import { DatasetLabeled, LabeledDatasetItem, Telemetry } from "./types";
export declare const isLabeledDatasetItem: (item: unknown) => item is LabeledDatasetItem;
export declare const isDatasetLabeled: (dataset: unknown) => dataset is DatasetLabeled;
export declare const isTelemetry: (telemetry: unknown) => telemetry is Telemetry;
