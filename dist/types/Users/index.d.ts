import { RefuelBase } from "../RefuelBase";
import { InviteUsersResponse, User } from "../types";
export declare class Users {
    private readonly base;
    constructor(base: RefuelBase);
    create(email: string | string[]): Promise<InviteUsersResponse>;
    get(userId: string): Promise<User>;
    list(): Promise<User[]>;
}
