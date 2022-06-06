import { DiscordUserRepository } from "./../Domain/Repository/DiscordUserRepository";
import { Message } from "discord.js";

export class WhoAmICommand {

    discordUserRepository: DiscordUserRepository;

    constructor () {
        this.discordUserRepository = new DiscordUserRepository();
    }

    async execute(message: Message): Promise<void> {
        var result = "You are " + message.author.username + "#" + message.author.discriminator;
        message.reply(result);
    }
}