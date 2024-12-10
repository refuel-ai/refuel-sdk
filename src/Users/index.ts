import { RefuelBase } from "../RefuelBase";
import { InviteUsersResponse, User } from "../types";

export class Users {
    private readonly base: RefuelBase;

    constructor(base: RefuelBase) {
        this.base = base;
    }

    async create(email: string | string[]) {
        const data = Array.isArray(email) ? email : [email];
        return this.base.request<InviteUsersResponse, string[]>("/users", {
            method: "POST",
            data,
        });
    }

    async get(userId: string): Promise<User> {
        return this.base.request<User>(`/users/${userId}`);
    }

    async list(): Promise<User[]> {
        return this.base.request<User[]>("/users");
    }
}
