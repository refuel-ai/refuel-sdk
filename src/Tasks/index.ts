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
     * Create a task
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.create({ task_name: "My Task", project_id: "123" });
     * ```
     */
    async create(data: Partial<Task>): Promise<Task> {
        if (!data.task_name) {
            throw new Error("task name is required");
        }

        if (!data.project_id) {
            throw new Error("project id is required");
        }

        const params = new URLSearchParams({
            task_name: data.task_name,
            project_id: data.project_id,
        });

        return this.base.request<Task>(
            `/projects/${data.project_id}/tasks?${params.toString()}`,
            {
                method: "POST",
                data,
            }
        );
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
    async list(projectId?: string): Promise<Task[]> {
        const endpoint = projectId ? `/projects/${projectId}/tasks` : "/tasks";

        return this.base.request<Task[]>(endpoint);
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

    /**
     * Duplicate a task
     *
     * @example
     * ```ts
     * const task = await refuel.tasks.duplicate(taskId);
     * ```
     */
    async duplicate(taskId: string): Promise<Task> {
        const task = await this.get(taskId);

        if (!task.id) {
            throw new Error("task id is required");
        }

        if (!task.project_id) {
            throw new Error("project id is required");
        }

        const duplicateName = `${task.task_name} (Copy)`;
        const params = new URLSearchParams({
            ref_task_id: task.id,
            project_id: task.project_id,
            task_name: duplicateName,
        });

        return this.base.request<Task>(
            `/projects/${task.project_id}/tasks?${params.toString()}`,
            {
                method: "POST",
            }
        );
    }

    /**
     * Reset all LLM and human verified labels
     *
     * @example
     * ```ts
     * await refuel.tasks.reset(taskId);
     * ```
     */
    async reset(taskId: string): Promise<void> {
        const params = new URLSearchParams({
            clear_labels_and_feedback: "true",
        });

        return this.base.request<void>(
            `/tasks/${taskId}?${params.toString()}`,
            {
                method: "POST",
            }
        );
    }

    /**
     * Delete a subtask field from a task
     *
     * @example
     * ```ts
     * await refuel.tasks.deleteSubtask(taskId, subtaskId);
     * ```
     */
    async deleteSubtask(
        taskId: string,
        subtaskId: string | string[]
    ): Promise<void> {
        const subtaskIds = Array.isArray(subtaskId) ? subtaskId : [subtaskId];

        await Promise.all(
            subtaskIds.map((id) =>
                this.base.request<void>(`/tasks/${taskId}/subtasks/${id}`, {
                    method: "DELETE",
                })
            )
        );
    }

    /**
     * Delete an enrichment field from a task
     *
     * @example
     * ```ts
     * await refuel.tasks.deleteEnrichment(taskId, enrichmentId);
     * ```
     */
    async deleteEnrichment(
        taskId: string,
        enrichmentId: string | string[]
    ): Promise<void> {
        const enrichmentIds = Array.isArray(enrichmentId)
            ? enrichmentId
            : [enrichmentId];

        await Promise.all(
            enrichmentIds.map((id) =>
                this.base.request<void>(`/tasks/${taskId}/transforms/${id}`, {
                    method: "DELETE",
                })
            )
        );
    }
}
