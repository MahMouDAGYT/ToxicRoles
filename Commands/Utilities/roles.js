const Command = require('../../Structures/Command');
const { MessageEmbed } = require('discord.js');
const moment = require('moment');

const filterLevels = {
	DISABLED: 'Off',
	MEMBERS_WITHOUT_ROLES: 'No Role',
	ALL_MEMBERS: 'Everyone'
};

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			description: 'Displays roles in the server that said message was run in.',
			category: 'Information'
		});
	}

	async run(message) {
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

		const embed = new MessageEmbed()
			.setDescription(`**Guild Roles __${message.guild.name}__**`)
			.setColor('BLUE')
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField(`Roles Count [${roles.length - 1}]`, roles.length < 500 ? roles.join(', ') : roles.length > 500 ? this.client.utils.trimArray(roles) : 'None')
			.setTimestamp();
		message.channel.send(embed);
	}

};
