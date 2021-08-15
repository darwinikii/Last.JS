const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS] });
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require("fs");
require("./utils/eventLoader")(client);
const rest = new REST({ version: '9' }).setToken(process.env.token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var commands = []
fs.readdir("./commands/", async (err, files) => {
 //console.log(await rest.delete('/applications/823855642128810014/commands/874532394856611840'),)
 if (err) console.error(err);
 console.log(`${files.length} commands will load`);
 files.forEach(async f => {
    let command = require(`./commands/${f}`);
    var cmdInf = { name: command.info.name, description: command.info.desc, options: command.info.opt }
    commands.push(cmdInf)
    //await rest.delete('/applications/823855642128810014/commands/874229375447494716');
   });
 console.log('Started refreshing application (/) commands.');
// await rest.put(Routes.applicationCommands("823855642128810014"),{ body: commands });
  console.log('Successfully reloaded application (/) commands.');
 });

client.on('interactionCreate', async interaction => {
  console.log(interaction)
  console.log(interaction.options)
});

client.login(process.env.token);