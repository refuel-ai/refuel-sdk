import { RefuelBase } from "../RefuelBase";
import { Project, ProjectData } from "../types";
/**
 * Handles operations related to projects.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class Projects {
    private base;
    constructor(base: RefuelBase);
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
    create(data: ProjectData): Promise<Project>;
    /**
     * Get a project by ID
     *
     * @example
     * ```ts
     * const project = await refuel.projects.get(projectId);
     * ```
     */
    get(projectId: string): Promise<Project>;
    /**
     * List all projects
     *
     * @example
     * ```ts
     * const projects = await refuel.projects.list();
     * ```
     */
    list(): Promise<Project[]>;
    /**
     * Delete a project and all associated resources
     *
     * @example
     * ```ts
     * await refuel.projects.delete(projectId);
     * ```
     */
    delete(projectId: string): Promise<void>;
}
