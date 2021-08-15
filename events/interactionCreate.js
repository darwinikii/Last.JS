const Discord = require('discord.js');

module.exports = async (client, interaction) => {
 //   if (!interaction.isCommand()) return;
    const cmd = require("../commands/" + interaction.commandName + ".js")
    cmd.run(client, interaction);
};
