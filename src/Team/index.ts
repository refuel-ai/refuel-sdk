import { RefuelBase } from "../RefuelBase";
import { RefuelTeam } from "../types";

export class Team {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Get the current team
     *
     * @example
     * ```ts
     * const team = await refuel.team.get();
     * ```
     */
    async get(): Promise<RefuelTeam> {
        return this.base.request<RefuelTeam>("/team");
    }

    /**
     * Regenerate the API key for the current team
     *
     * @example
     * ```ts
     * const apiKey = await refuel.team.regenerateApiKey();
     * ```
     */
    async regenerateApiKey(): Promise<string> {
        await this.base.request<void>("/team?regenerate_api_key=true", {
            method: "POST",
        });

        return (await this.get()).refuel_api_key;
    }

    /**
     * Sign a URL
     *
     * @example
     * ```ts
     * const signedUrl = await refuel.team.signUrl("https://example.com");
     * ```
     */
    async signUrl(url: string): Promise<{ url: string }> {
        const params = new URLSearchParams();
        params.append("url", url);

        return this.base.request<{ url: string }>(
            `/team/sign-url?${params.toString()}`
        );
    }
}
