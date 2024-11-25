import { RefuelBase } from "../RefuelBase";
import { TeamModel } from "../types";
export declare class TeamModels {
    private base;
    constructor(base: RefuelBase);
    list(): Promise<TeamModel[]>;
}
