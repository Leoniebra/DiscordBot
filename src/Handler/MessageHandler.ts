import { Message, UserManager } from 'discord.js';
import { UserRepository } from 'src/Domain/Repository/DiscordUserRepository';

export class MessageHandler {
    
    constructor() {}

    handle(message: Message): void {

        if(message.author.bot)
        {
            return;
        }         
        const userRepository = new UserRepository();
        console.log(userRepository.findAll());
        message.reply("Yo!");
    }
}