const config = require('../config.json');
import Discord from 'discord.js';
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", function(message) { 
    console.log(message);                                         
}); 

client.login(config.BOT_TOKEN);
