import { RefuelBase } from "../RefuelBase";
import { Project, ProjectData } from "../types";

/**
 * Handles operations related to projects.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
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
        params.append("description", data.description || "");

        return this.base.request<Project>(`/projects?${params.toString()}`, {
            method: "POST",
            data,
        });
    }

    /**
     * Get a project by ID
     *
     * @example
     * ```ts
     * const project = await refuel.projects.get(projectId);
     * ```
     */
    async get(projectId: string): Promise<Project> {
        return this.base.request<Project>(`/projects/${projectId}`);
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
        return this.base.request<Project[]>("/projects");
    }

    /**
     * Delete a project and all associated resources
     *
     * @example
     * ```ts
     * await refuel.projects.delete(projectId);
     * ```
     */
    async delete(projectId: string): Promise<void> {
        return this.base.request<void>(`/projects/${projectId}`, {
            method: "DELETE",
        });
    }
}
