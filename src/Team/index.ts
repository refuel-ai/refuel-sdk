import { RefuelBase } from "../RefuelBase";
import { RefuelTeam } from "../types";

export class Team {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async get(): Promise<RefuelTeam> {
        return this.base.request<RefuelTeam>({
            method: "GET",
            endpoint: "/team",
        });
    }

    async regenerateApiKey(): Promise<string> {
        await this.base.request<void>({
            method: "PATCH",
            endpoint: "/team",
            data: {
                update_api_key: true,
            },
        });

        return (await this.get()).refuel_api_key;
    }
}
