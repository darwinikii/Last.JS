const Discord = require('discord.js');
const styles = [ "PRIMARY", "SECONDARY", "SUCCESS", "DANGER"]

exports.run = async (client, interaction) => {
const row = new Discord.MessageActionRow()
	.addComponents(
	 new Discord.MessageButton()
	 .setCustomId('ping')
	 .setLabel('Update MS')
	 .setStyle(styles[Math.floor(Math.random() * styles.length)]),
    )
    .addComponents(
     new Discord.MessageButton()
     .setCustomId('stats')
     .setLabel("GODMODE!!")
     .setStyle("DANGER")
    );
  interaction.message.channel.send({ content: "Pong 🏓(" + client.ws.ping + "MS)", components: [row] })
  interaction.message.delete();

}