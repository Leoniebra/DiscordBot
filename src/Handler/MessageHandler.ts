import { Message, UserManager } from 'discord.js';
import { DiscordUser } from './../Domain/Model/DiscordUser';
import { DiscordUserRepository } from './../Domain/Repository/DiscordUserRepository';

export class MessageHandler {
    
    constructor() {}

    async handle(message: Message): Promise<void> {
        if(message.author.bot)
        {
            return;
        }         
        const userRepository = new DiscordUserRepository();
        let discordUser = new DiscordUser();
        discordUser.Name = message.author.username;
        discordUser.Identifier = parseInt(message.author.discriminator);
        await userRepository.create(discordUser);
        const result = await userRepository.findAll();
        console.log(result);
        message.reply("Yo!");
    }
}