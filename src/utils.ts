import { DatasetLabeled, LabeledDatasetItem, Telemetry } from "./types";

export const isLabeledDatasetItem = (
    item: unknown
): item is LabeledDatasetItem => {
    return typeof item === "object" && item !== null && "labels" in item;
};

export const isDatasetLabeled = (
    dataset: unknown
): dataset is DatasetLabeled => {
    return (
        typeof dataset === "object" &&
        dataset !== null &&
        "items" in dataset &&
        Array.isArray(dataset?.items) &&
        isLabeledDatasetItem(dataset.items[0])
    );
};

export const isTelemetry = (telemetry: unknown): telemetry is Telemetry => {
    return (
        typeof telemetry === "object" &&
        telemetry !== null &&
        "telemetry_type" in telemetry &&
        "telemetry_value" in telemetry
    );
};
