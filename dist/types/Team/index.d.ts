import { RefuelBase } from "../RefuelBase";
import { RefuelTeam } from "../types";
export declare class Team {
    private readonly base;
    constructor(base: RefuelBase);
    /**
     * Get the current team
     *
     * @example
     * ```ts
     * const team = await refuel.team.get();
     * ```
     */
    get(): Promise<RefuelTeam>;
    /**
     * Regenerate the API key for the current team
     *
     * @example
     * ```ts
     * const apiKey = await refuel.team.regenerateApiKey();
     * ```
     */
    regenerateApiKey(): Promise<string>;
    /**
     * Sign a URL
     *
     * @example
     * ```ts
     * const signedUrl = await refuel.team.signUrl("https://example.com");
     * ```
     */
    signUrl(url: string): Promise<{
        url: string;
    }>;
}
