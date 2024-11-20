import { RefuelBase } from "../RefuelBase";
import { Integration } from "../types";
export declare class Integrations {
    private base;
    constructor(base: RefuelBase);
    get(integrationId: string): Promise<Integration>;
    list(): Promise<Integration[]>;
    update(integrationId: string, data: Partial<Integration>): Promise<Integration>;
}
