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
    list(projectId?: string): Promise<Tasks[]>;
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
}
