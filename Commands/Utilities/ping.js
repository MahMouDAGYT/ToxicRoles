const Command = require('../../Structures/Command');
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: false })

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			aliases: ['pong']
		});
	}

	async run(message) {
		const msg = await message.channel.send('Pinging...');

		const latency = msg.createdTimestamp - message.createdTimestamp;
        const embed = new Discord.MessageEmbed()
		.setTimestamp()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setDescription(`> **Bot Latency:**\n \`${latency}ms\`\n> **API Latency:**\n \`${Math.round(this.client.ws.ping)}ms\``)
		msg.edit(embed);
	}

};