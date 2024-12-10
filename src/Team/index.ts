import { RefuelBase } from "../RefuelBase";
import { RefuelTeam } from "../types";

export class Team {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async get(): Promise<RefuelTeam> {
        return this.base.request<RefuelTeam>("/team");
    }

    async regenerateApiKey(): Promise<string> {
        await this.base.request<void>("/team", {
            method: "PATCH",
            data: {
                update_api_key: true,
            },
        });

        return (await this.get()).refuel_api_key;
    }

    async signUrl(url: string): Promise<{ url: string }> {
        const params = new URLSearchParams();
        params.append("url", url);

        return this.base.request<{ url: string }>(
            `/team/sign-url?${params.toString()}`
        );
    }
}
