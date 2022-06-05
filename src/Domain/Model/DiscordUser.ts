import { BaseEntity } from "./BaseEntity";
import { User } from "@prisma/client";

export class DiscordUser extends BaseEntity {
    Name: string;
    Identifier: number;

    constructor() {
        super();
    }

    mapFromDbUser(user: User): void {
        this.Uid = user.uid;
        this.Name = user.name;
        this.Identifier = user.identifier;
    }
}