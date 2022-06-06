import { Message, UserManager } from 'discord.js';
import { DiscordUser } from './../Domain/Model/DiscordUser';
import { DiscordUserRepository } from './../Domain/Repository/DiscordUserRepository';
import { WhoAmICommand } from './../Command/WhoAmICommand';

export class MessageHandler {
    
    constructor() {}

    async handle(message: Message): Promise<void> {
        if(message.author.bot)
        {
            return;
        }
        
        if(message.content.toLowerCase() == "!whoami")
        {
            const command = new WhoAmICommand();
            await command.execute(message);
        }
    }

}