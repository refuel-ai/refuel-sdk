import { RefuelBase } from "../RefuelBase";
import { Integration } from "../types";

export class Integrations {
    private base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async get(integrationId: string): Promise<Integration> {
        return this.base.request<Integration>(`/integrations/${integrationId}`);
    }

    async list(): Promise<Integration[]> {
        return this.base.request<Integration[]>("/integrations");
    }

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
