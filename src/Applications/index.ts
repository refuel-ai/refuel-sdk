import { RefuelBase } from "../RefuelBase";
import {
    Application,
    ApplicationCreateOptions,
    ApplicationLabelOptions,
    ApplicationLabelResponse,
    ApplicationOutputAsync,
    ApplicationOutputSync,
    Dataset,
} from "../types";

export class Applications {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async create(options: ApplicationCreateOptions): Promise<Application> {
        const params = new URLSearchParams();
        params.append("task_id", options.taskId);

        if (options.name) {
            params.append("name", options.name);
        }

        return this.base.request<Application>(
            `/projects/${options.projectId}/applications?${params.toString()}`,
            {
                method: "POST",
            }
        );
    }

    async get(applicationId: string): Promise<Application> {
        return this.base.request<Application>(`/applications/${applicationId}`);
    }

    async list(projectId?: string): Promise<Application[]> {
        const endpoint = projectId
            ? `/projects/${projectId}/applications`
            : "/applications";

        return this.base.request<Application[]>(endpoint);
    }

    async delete(applicationId: string): Promise<void> {
        return this.base.request<void>(`/applications/${applicationId}`, {
            method: "DELETE",
        });
    }

    async label<
        FieldKeys extends string,
        A extends boolean | undefined = undefined
    >(
        applicationId: string,
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
        >(`/applications/${applicationId}/label?${params.toString()}`, {
            method: "POST",
            data,
        });
    }

    async getLabeledItem<FieldKeys extends string>(
        applicationId: string,
        itemId: string
    ) {
        return this.base.request<
            ApplicationLabelResponse<ApplicationOutputSync<FieldKeys>>
        >(`/applications/${applicationId}/items/${itemId}`);
    }

    async feedback(
        applicationId: string,
        itemId: string,
        correctLabelData: Record<string, string>
    ) {
        const application = await this.get(applicationId);

        const subtaskMap = Object.fromEntries(
            application.subtasks?.map((subtask) => [
                subtask.name,
                subtask.id,
            ]) ?? []
        );

        const feedbackData: Record<string, { label: string }> = {};
        for (const [subtaskName, subtaskLabel] of Object.entries(
            correctLabelData
        )) {
            const subtaskId = subtaskMap[subtaskName];
            if (!subtaskId) {
                throw new Error(`Invalid field: ${subtaskName}`);
            }
            feedbackData[subtaskId] = { label: subtaskLabel };
        }

        return this.base.request<Dataset>(
            `/applications/${applicationId}/items/${itemId}/label`,
            {
                method: "POST",
                data: feedbackData,
            }
        );
    }
}
