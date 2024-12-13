import { RefuelBase } from "../RefuelBase";
import { Task } from "../types";

/**
 * Handles operations related to tasks.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class Tasks {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Get a task by ID
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.get(taskId);
     * ```
     */
    async get(taskId: string): Promise<Task> {
        return this.base.request<Task>(`/tasks/${taskId}`);
    }

    /**
     * List all tasks
     *
     * @example
     * ```ts
     * const tasks = await refuel.tasks.list();
     * ```
     */
    async list(projectId?: string): Promise<Tasks[]> {
        const endpoint = projectId ? `/projects/${projectId}/tasks` : "/tasks";

        return this.base.request<Tasks[]>(endpoint);
    }

    /**
     * Update a task
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.update(taskId, { name: "New Name" });
     * ```
     */
    async update(taskId: string, data: Partial<Task>): Promise<Task> {
        return this.base.request<Task, Partial<Task>>(`/tasks/${taskId}`, {
            method: "PATCH",
            data,
        });
    }

    /**
     * Delete a task
     *
     * @example
     * ```ts
     * await refuel.tasks.delete(taskId);
     * ```
     */
    async delete(taskId: string): Promise<void> {
        return this.base.request<void>(`/tasks/${taskId}`, {
            method: "DELETE",
        });
    }
}
