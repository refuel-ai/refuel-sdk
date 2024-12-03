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

    /**
     * Deploy a specific task as an application
     *
     * @example
     * ```ts
     * const application = await refuel.applications.create({
     *     projectId: "2a79a616-180b-4226-9f1a-d04d47e7e100",
     *     taskId: "3b8cd724-291c-4123-8f2b-e05d38f1e200",
     * });
     * ```
     */
    async create(options: ApplicationCreateOptions): Promise<Application> {
        const params = new URLSearchParams();
        params.append("task_id", options.taskId);

        if (options.name) {
            params.append("name", options.name);
        }

        return this.base.request<Application>({
            method: "POST",
            endpoint: `/projects/${
                options.projectId
            }/applications?${params.toString()}`,
        });
    }

    /**
     * Get an application
     *
     * @example
     * ```ts
     * const application = await refuel.applications.get(applicationId);
     * ```
     */
    async get(applicationId: string): Promise<Application> {
        return this.base.request<Application>({
            method: "GET",
            endpoint: `/applications/${applicationId}`,
        });
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

        return this.base.request<Application[]>({
            method: "GET",
            endpoint,
        });
    }

    /**
     * Delete an application
     *
     * @example
     * ```ts
     * await refuel.applications.delete(applicationId);
     * ```
     */
    async delete(applicationId: string): Promise<void> {
        return this.base.request({
            method: "DELETE",
            endpoint: `/applications/${applicationId}`,
        });
    }

    /**
     * Labels an item with your application
     *
     * @example Basic usage
     * ```ts
     * const labeledItems = await refuel.applications.label(applicationId, [{
     *     "menu_text": "Grilled chicken sandwich with avocado and chipotle mayo",
     * }]);
     * ```
     *
     * @example Using all available options
     * ```ts
     * const labeledItemsWithOptions = await refuel.applications.label(
     *     "4f91b229-37d4-42f1-8a3b-9c1e98e9f300",
     *     [{
     *         "menu_text": "Grilled chicken sandwich with avocado and chipotle mayo",
     *     }],
     *     {
     *         explain: true,           // Include explanation of the labeling decision
     *         async: true,             // Process labels asynchronously
     *         modelId: "gpt-4",        // Specify which model to use
     *         redactPII: true,         // Redact personally identifiable information
     *         telemetry: false,        // Disable telemetry collection
     *     }
     * );
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
        >({
            method: "POST",
            endpoint: `/applications/${applicationId}/label?${params.toString()}`,
            data,
        });
    }

    /**
     * Get labels for a specific item
     *
     * @example
     * ```ts
     * const labeledItem = await refuel.applications.getLabeledItem(applicationId, itemId);
     * ```
     */
    async getLabeledItem<FieldKeys extends string>(
        applicationId: string,
        itemId: string
    ) {
        return this.base.request<
            ApplicationLabelResponse<ApplicationOutputSync<FieldKeys>>
        >({
            method: "GET",
            endpoint: `/applications/${applicationId}/items/${itemId}`,
        });
    }

    /**
     * Provide the correct label for an item
     *
     * @example
     * ```ts
     * await refuel.applications.feedback(applicationId, itemId, {
     *     "vegetarian": false,
     * });
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

        return this.base.request<Dataset>({
            method: "POST",
            endpoint: `/applications/${applicationId}/items/${itemId}/label`,
            data: feedbackData,
        });
    }
}
