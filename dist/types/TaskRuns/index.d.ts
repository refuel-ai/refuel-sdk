import { RefuelBase } from "../RefuelBase";
import { TaskRun, TaskRunOptions } from "../types";
export declare class TaskRuns {
    private base;
    constructor(base: RefuelBase);
    list(taskId: string, options?: TaskRunOptions): Promise<TaskRun[]>;
}
