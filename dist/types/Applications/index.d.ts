import { RefuelBase } from "../RefuelBase";
import { Application, ApplicationCreateOptions, ApplicationLabelOptions, ApplicationLabelResponse, ApplicationOutputAsync, ApplicationOutputSync, Dataset } from "../types";
export declare class Applications {
    private readonly base;
    constructor(base: RefuelBase);
    create(options: ApplicationCreateOptions): Promise<Application>;
    get(applicationId: string, isCatalog?: boolean): Promise<Application>;
    list(projectId?: string, isCatalog?: boolean): Promise<Application[]>;
    delete(applicationId: string): Promise<void>;
    label<FieldKeys extends string, A extends boolean | undefined = undefined>(applicationId: string, data: Record<string, unknown>[], isCatalog?: boolean, options?: ApplicationLabelOptions & {
        async?: A;
    }): Promise<A extends true ? ApplicationLabelResponse<ApplicationOutputAsync> : ApplicationLabelResponse<ApplicationOutputSync<FieldKeys>>>;
    getLabeledItem<FieldKeys extends string>(applicationId: string, itemId: string): Promise<ApplicationLabelResponse<ApplicationOutputSync<FieldKeys>>>;
    feedback(applicationId: string, itemId: string, correctLabelData: Record<string, string>): Promise<Dataset>;
}
