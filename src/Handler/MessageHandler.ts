import { Message } from 'discord.js';
import { PrismaClient } from '@prisma/client';
import { user } from '@prisma/client';


export class MessageHandler {
    
    constructor() {}

    handle(message: Message) {

        if(message.author.bot)
        {
            return;
        }         

        message.reply("Yo!");
    }



}