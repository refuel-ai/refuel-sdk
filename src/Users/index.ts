import { RefuelBase } from "../RefuelBase";
import { InviteUsersResponse, User } from "../types";

/**
 * Handles operations related to users.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export class Users {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    /**
     * Invite users to your team
     *
     * @example
     * ```ts
     * const response = await refuel.users.create(["user1@example.com", "user2@example.com"]);
     * ```
     */
    async create(email: string | string[]) {
        const data = Array.isArray(email) ? email : [email];
        return this.base.request<InviteUsersResponse, string[]>("/users", {
            method: "POST",
            data,
        });
    }

    /**
     * Get a user by ID
     *
     * @example
     * ```ts
     * const user = await refuel.users.get(userId);
     * ```
     */
    async get(userId: string): Promise<User> {
        return this.base.request<User>(`/users/${userId}`);
    }

    /**
     * List all users in your team
     *
     * @example
     * ```ts
     * const users = await refuel.users.list();
     * ```
     */
    async list(): Promise<User[]> {
        return this.base.request<User[]>("/users");
    }
}
