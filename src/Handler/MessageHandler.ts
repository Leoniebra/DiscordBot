import { Message, UserManager } from 'discord.js';
import { DiscordUserRepository } from './../Domain/Repository/DiscordUserRepository';

export class MessageHandler {
    
    constructor() {}

    async handle(message: Message): Promise<void> {
        if(message.author.bot)
        {
            return;
        }         
        const userRepository = new DiscordUserRepository();
        const result = await userRepository.findAll();
        console.log(result);
        message.reply("Yo!");
    }
}