const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
	name: 'volume',
	description: 'Play a song in your channel!',
	async execute(message) {
        const queue = message.client.queue;
		const serverQueue = message.client.queue.get(message.guild.id);
		const args = message.content.slice(1).split(/ +/);
		let volumeembed = new Discord.RichEmbed()
		.setTitle(` O volume atual é ${serverQueue.volume}! `)
		.setColor('#8B008B')
		let volumereal = new Discord.RichEmbed()
		.setTitle(` O volume foi setado para ${args[1]}. `)
		.setColor('#8B008B')
		let volumesurdo = new Discord.RichEmbed()
		.setTitle(' Vai devagar, quer ficar surdo? ')
		.setColor('#8B008B')
		let volume22 = new Discord.RichEmbed()
		.setTitle(' E bom conseguirmos ouvir algo... ')
		.setColor('#8B008B')
const voiceChannel = message.member.voiceChannel;
if(args[1] <= -1) return message.channel.send(volume22)
if(args[1] > 100) return message.channel.send(volumesurdo)
if(!args[1]) return message.channel.send(volumeembed)

serverQueue.volume = args[1];
serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);

message.channel.send(volumereal)


}}