import { RefuelBase } from "../RefuelBase";
import { Task } from "../types";
/**
 * Handles operations related to tasks.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class Tasks {
    private readonly base;
    constructor(base: RefuelBase);
    /**
     * Create a task
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.create({ task_name: "My Task", project_id: "123" });
     * ```
     */
    create(data: Partial<Task>): Promise<Task>;
    /**
     * Get a task by ID
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.get(taskId);
     * ```
     */
    get(taskId: string): Promise<Task>;
    /**
     * List all tasks
     *
     * @example
     * ```ts
     * const tasks = await refuel.tasks.list();
     * ```
     */
    list(projectId?: string): Promise<Task[]>;
    /**
     * Update a task
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.update(taskId, { name: "New Name" });
     * ```
     */
    update(taskId: string, data: Partial<Task>): Promise<Task>;
    /**
     * Delete a task
     *
     * @example
     * ```ts
     * await refuel.tasks.delete(taskId);
     * ```
     */
    delete(taskId: string): Promise<void>;
    /**
     * Duplicate a task
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.duplicate(taskId);
     * ```
     */
    duplicate(taskId: string): Promise<Task>;
    /**
     * Reset all LLM and human verified labels
     *
     * @example
     * ```ts
     * await refuel.tasks.reset(taskId);
     * ```
     */
    reset(taskId: string): Promise<void>;
    /**
     * Delete a subtask field from a task
     *
     * @example
     * ```ts
     * await refuel.tasks.deleteSubtask(taskId, subtaskId);
     * ```
     */
    deleteSubtask(taskId: string, subtaskId: string | string[]): Promise<void>;
    /**
     * Delete an enrichment field from a task
     *
     * @example
     * ```ts
     * await refuel.tasks.deleteEnrichment(taskId, enrichmentId);
     * ```
     */
    deleteEnrichment(taskId: string, enrichmentId: string | string[]): Promise<void>;
}
