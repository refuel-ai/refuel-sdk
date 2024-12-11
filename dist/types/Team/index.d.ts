import { RefuelBase } from "../RefuelBase";
import { RefuelTeam } from "../types";
export declare class Team {
    private readonly base;
    constructor(base: RefuelBase);
    get(): Promise<RefuelTeam>;
    regenerateApiKey(): Promise<string>;
    signUrl(url: string): Promise<{
        url: string;
    }>;
}
