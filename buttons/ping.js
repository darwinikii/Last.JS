const Discord = require('discord.js');

exports.run = async (client, interaction) => {
const row = new Discord.MessageActionRow()
	.addComponents(
	 new Discord.MessageButton()
	 .setCustomId('ping')
	 .setLabel('Update MS')
	 .setStyle("PRIMARY"),
    )
    .addComponents(
     new Discord.MessageButton()
     .setCustomId('stats')
     .setLabel("GODMODE!!")
     .setStyle("DANGER")
    );
interaction.message.channel.send({ content: "Pong 🏓(" + client.ws.ping + "MS)", components: [row] })
  const embed = new Discord.MessageEmbed({
                  title: 'Error occurred',
                  description: description,
                  type: 'rich',
                 });


		await interaction.channel.send({ embeds: [embed] });
  interaction.message.delete();

}