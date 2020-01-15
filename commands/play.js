const {
	Util
} = require('discord.js');
const {
	prefix,
    token,
    GOOGLE_API_KEY,
} = require('../config.json');
const ytdl = require('ytdl-core');
const Discord = require("discord.js");
const Youtube = require('simple-youtube-api');
const youtube = new Youtube(GOOGLE_API_KEY);
module.exports = {
	name: 'play',
	description: 'Play a song in your channel!',
	async execute(message) {
		const args = message.content.slice(1).split(/ +/);
		const searchString = args.slice(1).join(' ');
		const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
		const queue = message.client.queue;
		const serverQueue = message.client.queue.get(message.guild.id);
		const voiceChannel = message.member.voiceChannel

		let canaldevozemded = new Discord.RichEmbed()
			.setTitle(" Você precisa estar em um canal de voz para tocar música! ")
            .setColor('#8B008B')
		
		if (!voiceChannel) return message.channel.send(canaldevozemded);
		const permissions = voiceChannel.permissionsFor(message.client.user);

		let permissaoembed = new Discord.RichEmbed()
			.setTitle(" Eu preciso das permissões para participar e falar no seu canal de voz! ")
			.setColor('#8B008B')

		if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
			return message.channel.send(permissaoembed);
		}
		let urlembed = new Discord.RichEmbed()
			.setTitle(" Coloque uma URL ou diga-me o nome de algo para tocar! ")
			.setColor('#8B008B')
			
		if (!args[1]) {
			return message.channel.send(urlembed)
			  .catch(console.error);
		  }
		  if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) return message.channel.send("Eu ainda não suporto playlists!")
		  try {
			  var video = await youtube.getVideo(url);
		  } catch (error) {
			  try {
				  var videos = await youtube.searchVideos(searchString, 1);
				  var video = await youtube.getVideoByID(videos[0].id);
			  } catch (err) {
				  console.error(err);
				  const cu = new Discord.RichEmbed()
				  .setTitle(" Sem resultados para a pesquisa! ")
				  .setColor('#8B008B')
				  return message.channel.send(cu)
			  }
		  }  

		const song = {
			id: video.id,
			title: video.title,
			url: `https://www.youtube.com/watch?v=${video.id}`,
			thumbnail: `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`,
			uploadedby: video.channel.title,
			durationmm: video.durationSeconds ? video.durationSeconds : video.duration / 1000,
			durationh: video.duration.hours,
			durationm: video.duration.minutes,
			durations: video.duration.seconds, 
			duration: video.duration,
		}

		if (!video.id) return message.channel.send("video.id not found")

		if (!serverQueue) {
			const queueContruct = {
				textChannel: message.channel,
				voiceChannel: voiceChannel,
				connection: null,
				songs: [],
				volume: 5,
				playing: true,
			};

			queue.set(message.guild.id, queueContruct);

			queueContruct.songs.push(song);

			try {
				var connection = await voiceChannel.join();
				queueContruct.connection = connection;
				this.play(message, queueContruct.songs[0]);
			} catch (err) {
				console.log(err);
				queue.delete(message.guild.id);
				return message.channel.send(err);
			}
		} else {
			let musicaaddembed = new Discord.RichEmbed()
			.setTitle(` ${song.title} foi adicionado a fila! `)
			.setColor('#8B008B')

			serverQueue.songs.push(song);
			return message.channel.send(musicaaddembed)
		}
	},

	play(message, song) {
		const queue = message.client.queue;
		const guild = message.guild;
		const serverQueue = queue.get(message.guild.id);
	
		if (!song) {
			serverQueue.voiceChannel.leave();
			queue.delete(guild.id);
			return;
		}
	
		const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () =>  {
			serverQueue.songs.shift();
			this.play(message, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	const member = message.author
	let tocandoembed = new Discord.RichEmbed()
	.setTitle(` Comecei a tocar música! `)
	.addField(`<:637272543971246093:660508190135287819> | Nome da música`,`\`\`\`ini\n [ ${serverQueue.songs[0].title} ]\n\`\`\``)
	.addField(`<:637272543971246093:660508190135287819> | Nome do canal`,`\`\`\`ini\n [ ${serverQueue.songs[0].uploadedby} ]\n\`\`\``)
	.addField(`<:637272543971246093:660508190135287819> | Duração da música`,`\`\`\`ini\n [ ${serverQueue.songs[0].durationh}h ${serverQueue.songs[0].durationm}m ${serverQueue.songs[0].durations}s ]\n\`\`\``)
	.addField(`<:637272543971246093:660508190135287819> | ID do vídeo`,`\`\`\`ini\n [ ${serverQueue.songs[0].id} ]\n\`\`\``)
	.setColor('#8B008B')
    .setThumbnail(`${serverQueue.songs[0].thumbnail}`)
	if(dispatcher) return message.channel.send(tocandoembed)
	}
};