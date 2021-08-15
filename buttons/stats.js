const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = async (client, interaction) => {
    let embedd = new Discord.MessageEmbed("color")
    .setTitle('Last.JS')
//    .setFooter(`Server Shard: ${interaction.guild.shardID+1} `)
    .setColor('RED')
    .addField("• RAM", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB", true)
    .addField("• Total server", client.guilds.cache.size)
    .addField("• Total user", client.users.cache.size)
    .addField("• Discord.JS", "v13", true)
    .setThumbnail(client.user.avatarURL())
 // interaction.message.channel.send("za", false, undefined, [embed], undefined, "Deneme")
 // interaction.message.delete();

		const embed = new Discord.MessageEmbed({
                  title: 'Error occurred',
                  description: description,
                  type: 'rich',
                 });


		await interaction.reply({ embeds: [embed] });
}