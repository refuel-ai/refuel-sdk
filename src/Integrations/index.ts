import { RefuelBase } from "../RefuelBase";
import { Integration } from "../types";

/**
 * Handles operations related to third party integrations.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class Integrations {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Get a third party integration by ID
     *
     * @example
     * ```ts
     * const integration = await refuel.integrations.get(integrationId);
     * ```
     */
    async get(integrationId: string): Promise<Integration> {
        return this.base.request<Integration>(`/integrations/${integrationId}`);
    }

    /**
     * List all third party integrations
     *
     * @example
     * ```ts
     * const integrations = await refuel.integrations.list();
     * ```
     */
    async list(): Promise<Integration[]> {
        return this.base.request<Integration[]>("/integrations");
    }

    /**
     * Update a third party integration
     *
     * @example
     * ```ts
     * const integration = await refuel.integrations.update(integrationId, { is_connected: false });
     * ```
     */
    async update(
        integrationId: string,
        data: Partial<Integration>
    ): Promise<Integration> {
        return this.base.request<Integration, Partial<Integration>>(
            `/integrations/${integrationId}`,
            {
                method: "PATCH",
                data,
            }
        );
    }
}
