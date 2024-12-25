import { RefuelBase } from "../RefuelBase";
import { Application, ApplicationCreateOptions, ApplicationLabelOptions, ApplicationLabelResponse, ApplicationOutputAsync, ApplicationOutputSync, Dataset } from "../types";
/**
 * Handles operations related to applications.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class Applications {
    private readonly base;
    /** @internal */
    constructor(base: RefuelBase);
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
    create(options: ApplicationCreateOptions): Promise<Application>;
    /**
     * Get an application by ID
     *
     * @example
     * ```ts
     * const application = await refuel.applications.get(applicationId);
     * ```
     */
    get(applicationId: string): Promise<Application>;
    /**
     * List all applications
     *
     * @example
     * ```ts
     * const applications = await refuel.applications.list();
     * ```
     */
    list(projectId?: string): Promise<Application[]>;
    /**
     * Delete a deployed application
     *
     * @example
     * ```ts
     * await refuel.applications.delete(applicationId);
     * ```
     */
    delete(applicationId: string): Promise<void>;
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
    getLabeledItem<FieldKeys extends string>(applicationId: string, itemId: string): Promise<ApplicationLabelResponse<ApplicationOutputSync<FieldKeys>>>;
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
    label<FieldKeys extends string, A extends boolean | undefined = undefined>(applicationId: string, data: Record<string, unknown>[], options?: ApplicationLabelOptions & {
        async?: A;
    }): Promise<A extends true ? ApplicationLabelResponse<ApplicationOutputAsync> : ApplicationLabelResponse<ApplicationOutputSync<FieldKeys>>>;
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
    feedback(applicationId: string, itemId: string, correctLabelData: Record<string, string>): Promise<Dataset>;
}
