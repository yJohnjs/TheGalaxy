const {
	Util
} = require('discord.js');
const ytdl = require('ytdl-core');
const Discord = require("discord.js");

module.exports = {
	name: 'stop',
	description: 'Stop all songs in the queue!',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);

		let disconectouembed = new Discord.RichEmbed()
		.setTitle(':disappointed_relieved: Parece que a festa acabou e eu vou me retirar... :disappointed_relieved:')
		.setColor('#8B008B')

		if (!message.member.voiceChannel) return message.channel.send('Você precisa estar em um canal de voz para parar a música!');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end(); return message.channel.send(disconectouembed)
	},
};