const Discord = require("discord.js");
const ytdl = require('ytdl-core');

module.exports = {
	name: 'skip',
	description: 'Skip a song!',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		let canalparapular = new Discord.RichEmbed()
		.setTitle(':warning: Você precisa estar em um canal de voz para parar a música! :warning:')
		.setColor('#8B008B')

		let musicapular1 = new Discord.RichEmbed()
		.setTitle(':x: Não há música que eu possa pular! :x:')
		.setColor('#8B008B')

		let musicapular2 = new Discord.RichEmbed()
		.setTitle(`:fast_forward: A música foi pulada, agora estou tocando ${serverQueue.songs[1].title}! :fast_forward:`)
		.setColor('#8B008B')
		if (!message.member.voiceChannel) return message.channel.send(canalparapular);
		if (!serverQueue) return message.channel.send(musicapular1);
		serverQueue.connection.dispatcher.end(); return message.channel.send(musicapular2);
	},
};