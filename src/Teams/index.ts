import { RefuelBase } from "../RefuelBase";
import { RefuelListTeam } from "../types";

export class Teams {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async list(): Promise<RefuelListTeam[]> {
        return this.base.request<RefuelListTeam[]>({
            method: "GET",
            endpoint: "/teams",
        });
    }

    async get(teamName: string): Promise<RefuelListTeam | null> {
        const teams = await this.list();

        return teams.find((team) => team.name === teamName) || null;
    }
}
