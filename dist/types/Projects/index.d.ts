import { RefuelBase } from "../RefuelBase";
import { Project, ProjectData } from "../types";
export declare class Projects {
    private base;
    constructor(base: RefuelBase);
    create(data: ProjectData): Promise<Project>;
    get(projectId: string): Promise<Project>;
    list(): Promise<Project[]>;
    delete(projectId: string): Promise<void>;
}
