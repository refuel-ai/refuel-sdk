import { RefuelBase } from "../RefuelBase";
import { InviteUsersResponse, User } from "../types";

export class Users {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Invite users to your team's account
     *
     * @example
     * ```ts
     * await refuel.users.create(["user@example.com", "user2@example.com"]);
     * ```
     */
    async create(email: string | string[]) {
        const data = Array.isArray(email) ? email : [email];
        return this.base.request<InviteUsersResponse, string[]>({
            method: "POST",
            endpoint: "/users",
            data,
        });
    }

    /**
     * Get a specific user
     *
     * @example
     * ```ts
     * const user = await refuel.users.get(userId);
     * ```
     */
    async get(userId: string): Promise<User> {
        return this.base.request<User>({
            method: "GET",
            endpoint: `/users/${userId}`,
        });
    }

    /**
     * List all users on your team
     *
     * @example
     * ```ts
     * const users = await refuel.users.list();
     * ```
     */
    async list(): Promise<User[]> {
        return this.base.request<User[]>({
            method: "GET",
            endpoint: `/users`,
        });
    }
}
