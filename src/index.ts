const config = require('./../config.json');
const Discord = require('discord.js');
import { MessageHandler } from './Handler/MessageHandler';
import { PrismaClient, user } from '@prisma/client';

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const messageHandler = new MessageHandler();
const prisma = new PrismaClient();

client.on("messageCreate", function(message) { 
    messageHandler.handle(message);
    
    main().catch((e) => { 
        throw e
    })
    .finally(async () => {
    await prisma.$disconnect();
    });                                        
}); 

async function main() {
    const allUsers = await prisma.user.findMany();
    console.log(allUsers);
}

client.login(config.BOT_TOKEN);
