import { RefuelBase } from "../RefuelBase";
import { Task } from "../types";

export class Tasks {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async get(taskId: string): Promise<Task> {
        return this.base.request<Task>({
            method: "GET",
            endpoint: `/tasks/${taskId}`,
        });
    }

    async list(projectId?: string): Promise<Tasks[]> {
        const endpoint = projectId ? `/projects/${projectId}/tasks` : "/tasks";

        return this.base.request<Tasks[]>({
            method: "GET",
            endpoint,
        });
    }

    async update(taskId: string, data: Partial<Task>): Promise<Task> {
        return this.base.request<Task, Partial<Task>>({
            method: "PATCH",
            endpoint: `/tasks/${taskId}`,
            data,
        });
    }

    async delete(taskId: string): Promise<void> {
        return this.base.request<void>({
            method: "DELETE",
            endpoint: `/tasks/${taskId}`,
        });
    }
}
