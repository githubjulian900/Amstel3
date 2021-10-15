/** @format */

const Event = require("../Structures/Event.js");

const Discord = require("discord.js");

module.exports = new Event("messageUpdate", (client, member) => {
	const channel = member.guild.channels.cache.find(
		c => c.name == "logs"
	);

	if (!channel) return;

	const embed = new Discord.MessageEmbed();

	embed
		.setTitle("Member Joint")
		.setColor("Green")
		.setAuthor(member.user.tag)
		.setThumbnail(member.user.avatarURL({ dynamic: true }))
		.setTimestamp() 
		.setFooter(member)
		.addFields({ 
			name: "Test",
			value: `test`

	})

	channel.send({ embeds: [embed] });
});
