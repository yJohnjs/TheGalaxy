const Discord = require("discord.js");
module.exports = {
	name: 'nowplaying',
	description: 'Get the song that is playing.',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		let tocandoembed = new Discord.RichEmbed()
		.setTitle(`<a:Labfm:482171966833426432> Estou tocando ${serverQueue.songs[0].title}! <a:Labfm:482171966833426432>`)
		.setColor('#8B008B')
		let naotocandoembed = new Discord.RichEmbed()
		.setTitle("<a:Labfm:482171966833426432> Infelizmente não tem nada tocando , oque acha de iniciar a festa usando !play ? <a:Labfm:482171966833426432>")
		.setColor('#8B008B')
		if (!serverQueue) return message.channel.send(naotocandoembed);
		return message.channel.send(tocandoembed)
	},
};