import { PrismaClient, User } from '@prisma/client';
import { DiscordUser } from '../Model/DiscordUser';

export class UserRepository {
    prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
     }
    
    create(user: DiscordUser): void {
        try{async () => await this.prisma.user.create({
            data: {
                uid: user.Uid,
                name: user.Name,
                identifier: user.Identifier,
            }
        });
        }
        catch(e) {
            console.log(e);
        }
    }

    findAll(): Array<DiscordUser> {
        var result = new Array();
        var QueryResult = new Array();
        
        try{async () => QueryResult = await this.prisma.user.findMany();
        }
        catch(e) {
            console.log(e);
        }

        QueryResult.forEach(r => {
            var user = new DiscordUser();
            user.mapFromDbUser(r);
            result.push(user);
        });
        
        return result;
    }
}