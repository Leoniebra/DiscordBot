const config = require('./../config.json');
const Discord = require('discord.js');
import { MessageHandler } from './Handler/MessageHandler';

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
const messageHandler = new MessageHandler();

client.on("messageCreate", function(message) { 
    messageHandler.handle(message);                     
}); 

client.login(config.BOT_TOKEN);
