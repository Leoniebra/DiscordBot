import { PrismaClient, User } from '@prisma/client';
import { DiscordUser } from '../Model/DiscordUser';

export class DiscordUserRepository {
    prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
     }
    
    async create(user: DiscordUser): Promise<void> {
        await this.prisma.user.create({
            data: {
                uid: user.Uid,
                name: user.Name,
                identifier: user.Identifier,
            }
        });     
    }

    async findAll(): Promise<Array<DiscordUser>> {
        var result = new Array();
        var QueryResult = new Array();
        QueryResult = await this.prisma.user.findMany();
                
        QueryResult.forEach(r => {
            var user = new DiscordUser();
            user.mapFromDbUser(r);
            result.push(user);
        });
        
        return result;
    }
}