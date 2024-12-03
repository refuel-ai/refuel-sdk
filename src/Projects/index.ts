import { RefuelBase } from "../RefuelBase";
import { Project, ProjectData } from "../types";

export class Projects {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Create a new project
     *
     * @example
     * ```ts
     * const project = await refuel.projects.create({
     *     project_name: "My Project",
     * });
     * ```
     */
    async create(data: ProjectData): Promise<Project> {
        const params = new URLSearchParams();
        params.append("project_name", data.project_name);
        params.append("description", data.description || data.project_name);

        return this.base.request<Project>({
            method: "POST",
            endpoint: `/projects?${params.toString()}`,
            data,
        });
    }

    /**
     * Get a specific project
     *
     * @example
     * ```ts
     * const project = await refuel.projects.get(projectId);
     * ```
     */
    async get(projectId: string): Promise<Project> {
        return this.base.request<Project>({
            method: "GET",
            endpoint: `/projects/${projectId}`,
        });
    }

    /**
     * List all projects
     *
     * @example
     * ```ts
     * const projects = await refuel.projects.list();
     * ```
     */
    async list(): Promise<Project[]> {
        return this.base.request<Project[]>({
            method: "GET",
            endpoint: "/projects",
        });
    }

    /**
     * Delete a project
     *
     * @example
     * ```ts
     * await refuel.projects.delete(projectId);
     * ```
     */
    async delete(projectId: string): Promise<void> {
        return this.base.request({
            method: "DELETE",
            endpoint: `/projects/${projectId}`,
        });
    }
}
