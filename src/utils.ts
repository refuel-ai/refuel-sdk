import { RefuelAPIError } from "./RefuelBase";
import { DatasetLabeled, LabeledDatasetItem, Telemetry } from "./types";

export const isLabeledDatasetItem = (
    arg: unknown
): arg is LabeledDatasetItem => {
    return (
        typeof arg === "object" &&
        arg !== null &&
        "fields" in arg &&
        "labels" in arg &&
        Array.isArray(arg["labels"])
    );
};

export const isDatasetLabeled = (arg: unknown): arg is DatasetLabeled => {
    return (
        typeof arg === "object" &&
        arg !== null &&
        "items" in arg &&
        Array.isArray(arg?.items) &&
        isLabeledDatasetItem(arg.items[0])
    );
};

export const isTelemetry = (arg: unknown): arg is Telemetry => {
    return (
        typeof arg === "object" &&
        arg !== null &&
        "telemetry_type" in arg &&
        "telemetry_value" in arg
    );
};

export const isRefuelAPIError = (arg: unknown): arg is RefuelAPIError => {
    return arg instanceof RefuelAPIError;
};
