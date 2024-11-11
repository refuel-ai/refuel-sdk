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

        return this.base.request<Project>({
            method: "POST",
            endpoint: `/projects?${params.toString()}`,
            data,
        });
    }

    async get(projectId: string): Promise<Project> {
        return this.base.request<Project>({
            method: "GET",
            endpoint: `/projects/${projectId}`,
        });
    }

    async list(): Promise<Project[]> {
        return this.base.request<Project[]>({
            method: "GET",
            endpoint: "/projects",
        });
    }

    async delete(projectId: string): Promise<void> {
        return this.base.request<void>({
            method: "DELETE",
            endpoint: `/projects/${projectId}`,
        });
    }
}
