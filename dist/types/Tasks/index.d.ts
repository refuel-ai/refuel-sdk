import { RefuelBase } from "../RefuelBase";
import { Task } from "../types";
export declare class Tasks {
    private readonly base;
    constructor(base: RefuelBase);
    get(taskId: string): Promise<Task>;
    list(projectId?: string): Promise<Tasks[]>;
    update(taskId: string, data: Partial<Task>): Promise<Task>;
    delete(taskId: string): Promise<void>;
}
