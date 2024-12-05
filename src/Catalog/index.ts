import { RefuelBase } from "../RefuelBase";
import {
    Application,
    ApplicationLabelOptions,
    ApplicationLabelResponse,
    ApplicationOutputAsync,
    ApplicationOutputSync,
} from "../types";

export class Catalog {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async get(applicationName: string): Promise<Application> {
        return this.base.request<Application>({
            method: "GET",
            endpoint: `/catalog/${applicationName}`,
        });
    }

    async list(): Promise<Application[]> {
        const endpoint = "/catalog";

        return this.base.request<Application[]>({
            method: "GET",
            endpoint,
        });
    }

    async label<
        FieldKeys extends string,
        A extends boolean | undefined = undefined
    >(
        applicationName: string,
        data: Record<string, unknown>[],
        options?: ApplicationLabelOptions & { async?: A }
    ) {
        const params = new URLSearchParams();
        if (options?.modelId) {
            params.append("model_id", options.modelId);
        }

        if (options?.telemetry !== undefined) {
            params.append("telemetry", options.telemetry.toString());
        }

        if (options?.explain !== undefined) {
            params.append("explain", options.explain.toString());
        }

        if (options?.redactPII !== undefined) {
            params.append("redact_pii", options.redactPII.toString());
        }

        if (options?.async !== undefined) {
            params.append("is_async", options.async.toString());
        }

        return this.base.request<
            A extends true
                ? ApplicationLabelResponse<ApplicationOutputAsync>
                : ApplicationLabelResponse<ApplicationOutputSync<FieldKeys>>,
            Record<string, unknown>[]
        >({
            method: "POST",
            endpoint: `/catalog/${applicationName}/predict?${params.toString()}`,
            data,
        });
    }

    async getLabeledItem<FieldKeys extends string>(
        applicationName: string,
        itemId: string
    ) {
        return this.base.request<
            ApplicationLabelResponse<ApplicationOutputSync<FieldKeys>>
        >({
            method: "GET",
            endpoint: `/catalog/${applicationName}/items/${itemId}`,
        });
    }
}
