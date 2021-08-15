const Discord = require('discord.js');


module.exports = async client => {
  console.log(`Bot Ready!`); 
  client.user.setActivity("/ping") 
};
