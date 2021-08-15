const Discord = require('discord.js');

module.exports = async (client, interaction) => {
 //   if (!interaction.isCommand()) return;
    const cmd = require("../buttons/" + interaction.customId + ".js")
    cmd.run(client, interaction);
};
