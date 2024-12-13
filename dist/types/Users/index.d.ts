import { RefuelBase } from "../RefuelBase";
import { InviteUsersResponse, User } from "../types";
/**
 * Handles operations related to users.
 * This class is not intended to be instantiated directly.
 * Instead, access it through an instance of the Refuel class.
 */
export declare class Users {
    private readonly base;
    constructor(base: RefuelBase);
    /**
     * Invite users to your team
     *
     * @example
     * ```ts
     * const response = await refuel.users.create(["user1@example.com", "user2@example.com"]);
     * ```
     */
    create(email: string | string[]): Promise<InviteUsersResponse>;
    /**
     * Get a user by ID
     *
     * @example
     * ```ts
     * const user = await refuel.users.get(userId);
     * ```
     */
    get(userId: string): Promise<User>;
    /**
     * List all users in your team
     *
     * @example
     * ```ts
     * const users = await refuel.users.list();
     * ```
     */
    list(): Promise<User[]>;
}
