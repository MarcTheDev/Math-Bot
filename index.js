const Discord = require('discord.js');
const bot = Discord.Client();
const token = require("./config.yml");

bot.on('message', msg => {
  if(msg.content === ("this")) {
    
  }
bot.login(token);
});
