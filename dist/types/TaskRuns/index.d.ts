import { RefuelBase } from "../RefuelBase";
import { TaskRun, TaskRunCancelOptions, TaskRunCreateOptions, TaskRunListOptions } from "../types";
export declare class TaskRuns {
    private base;
    constructor(base: RefuelBase);
    create(taskId: string, options?: TaskRunCreateOptions): Promise<TaskRun>;
    cancel(taskId: string, options: TaskRunCancelOptions): Promise<void>;
    list(taskId: string, options?: TaskRunListOptions): Promise<TaskRun[]>;
}
