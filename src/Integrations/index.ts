import { RefuelBase } from "../RefuelBase";
import { Integration } from "../types";

export class Integrations {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async get(integrationId: string): Promise<Integration> {
        return this.base.request<Integration>({
            method: "GET",
            endpoint: `/integrations/${integrationId}`,
        });
    }

    async list(): Promise<Integration[]> {
        return this.base.request<Integration[]>({
            method: "GET",
            endpoint: "/integrations",
        });
    }

    async update(
        integrationId: string,
        data: Partial<Integration>
    ): Promise<Integration> {
        await this.base.request<void, Partial<Integration>>({
            method: "PATCH",
            endpoint: `/integrations/${integrationId}`,
            data,
        });

        return this.get(integrationId);
    }

    async disconnect(integrationId: string): Promise<Integration> {
        return this.update(integrationId, { is_connected: false });
    }
}
