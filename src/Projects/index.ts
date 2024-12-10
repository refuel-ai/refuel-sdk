import { RefuelBase } from "../RefuelBase";
import { Project, ProjectData } from "../types";

export class Projects {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async create(data: ProjectData): Promise<Project> {
        const params = new URLSearchParams();
        params.append("project_name", data.project_name);
        params.append("description", data.description);

        return this.base.request<Project>(`/projects?${params.toString()}`, {
            method: "POST",
            data,
        });
    }

    async get(projectId: string): Promise<Project> {
        return this.base.request<Project>(`/projects/${projectId}`);
    }

    async list(): Promise<Project[]> {
        return this.base.request<Project[]>("/projects");
    }

    async delete(projectId: string): Promise<void> {
        return this.base.request<void>(`/projects/${projectId}`, {
            method: "DELETE",
        });
    }
}
