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

/**
 * Handles operations related to applications.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class Applications {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Deploy a specific task as an application
     *
     * @example
     * ```ts
     * const application = await refuel.applications.create({
     *     projectId,
     *     taskId,
     * });
     * ```
     */
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

    /**
     * Get an application by ID
     *
     * @example
     * ```ts
     * const application = await refuel.applications.get(applicationId);
     * ```
     */
    async get(applicationId: string): Promise<Application> {
        return this.base.request<Application>(`/applications/${applicationId}`);
    }

    /**
     * List all applications
     *
     * @example
     * ```ts
     * const applications = await refuel.applications.list();
     * ```
     */
    async list(projectId?: string): Promise<Application[]> {
        const endpoint = projectId
            ? `/projects/${projectId}/applications`
            : "/applications";

        return this.base.request<Application[]>(endpoint);
    }

    /**
     * Delete a deployed application
     *
     * @example
     * ```ts
     * await refuel.applications.delete(applicationId);
     * ```
     */
    async delete(applicationId: string): Promise<void> {
        return this.base.request<void>(`/applications/${applicationId}`, {
            method: "DELETE",
        });
    }

    /**
     * Get labels for a specific item
     *
     * @example
     * ```ts
     * const labeledItem = await refuel.applications.getLabeledItem(
     *     applicationId,
     *     itemId,
     * );
     * ```
     */
    async getLabeledItem<FieldKeys extends string>(
        applicationId: string,
        itemId: string
    ) {
        return this.base.request<
            ApplicationLabelResponse<ApplicationOutputSync<FieldKeys>>
        >(`/applications/${applicationId}/items/${itemId}`);
    }

    /**
     * Labels an item with your application
     *
     * @example
     * Label an item and console log the values
     * ```ts
     * const dataToLabel = [
     *     {
     *         menu_text: "Grilled chicken sandwich with avocado and chipotle mayo",
     *     },
     * ];
     *
     * const labeledItem = await refuel.applications.label(
     *     applicationId,
     *     dataToLabel,
     * );
     * console.log(labeledItem); // output label values
     * ```
     *
     * @example
     * You can also trigger the label processing to happen asynchronously
     * ```ts
     * const response = await refuel.applications.label(
     *     applicationId,
     *     dataToLabel,
     *     { async: true }
     * );
     *
     * const labeledItem = await refuel.applications.getLabeledItem(
     *     response.application_id,
     *     response.refuel_output[0].refuel_uuid,
     * );
     *
     * console.log(labeledItem); // output label values
     * ```
     */
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

    /**
     * Provide the correct label for an item
     *
     * @example
     * ```ts
     * const correctLabelData = {
     *     vegetarian: "no",
     * };
     *
     * await refuel.applications.feedback(
     *     applicationId,
     *     itemId,
     *     correctLabelData,
     * );
     * ```
     */
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
