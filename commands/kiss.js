const { Command } = require('klasa');
const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
	name: 'kiss',
	description: 'Play a song in your channel!',
	async execute(message) {

const author = message.author;
      const user = message.mentions.users;
      const data = await (await fetch('https://nekos.life/api/v2/img/kiss')).json();
      if (!(data || data.url)) return message.sendError('NO_DATA');
      let pEmbed = new Discord.RichEmbed()
          .setTitle(`**${message.author.username}** Beijou **${message.mentions.users.first().username}**`)
          .setImage(data.url)
          .setColor('#8B008B')
          .setFooter(`Beijo dado por ${message.author.username}`, message.author.displayAvatarURL)
          message.channel.send(pEmbed);
    }}

    module.exports.help = {
        name:"kiss"
        }