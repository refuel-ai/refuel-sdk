import { RefuelBase } from "../RefuelBase";
import { TeamModel } from "../types";

export class TeamModels {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async list(): Promise<TeamModel[]> {
        return this.base.request<TeamModel[]>({
            method: "GET",
            endpoint: "/models",
        });
    }
}
