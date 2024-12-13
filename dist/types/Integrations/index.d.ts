import { RefuelBase } from "../RefuelBase";
import { Integration } from "../types";
/**
 * Handles operations related to third party integrations.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class Integrations {
    private base;
    constructor(base: RefuelBase);
    /**
     * Get a third party integration by ID
     *
     * @example
     * ```ts
     * const integration = await refuel.integrations.get(integrationId);
     * ```
     */
    get(integrationId: string): Promise<Integration>;
    /**
     * List all third party integrations
     *
     * @example
     * ```ts
     * const integrations = await refuel.integrations.list();
     * ```
     */
    list(): Promise<Integration[]>;
    /**
     * Update a third party integration
     *
     * @example
     * ```ts
     * const integration = await refuel.integrations.update(integrationId, { is_connected: false });
     * ```
     */
    update(integrationId: string, data: Partial<Integration>): Promise<Integration>;
}
