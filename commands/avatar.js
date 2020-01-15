const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const prefix = '!'
module.exports = {
    name: 'avatar',
	description: 'Pong!',
	async execute(message) {
const args = message.content.slice(prefix.length).trim().split(/ +/g);
    let pessoa = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
    let avatar = pessoa.displayAvatarURL
    if (avatar.endsWith(".gif")) {
      avatar = `${pessoa.displayAvatarURL}?size=2048`
    }
    message.channel.send({embed: {
      color: 0x8B008B,
      title: `${pessoa.tag}`,
      description: `[Link](${avatar})`,
      image: {url: `${avatar}`},
    }})
        
}}

module.exports.help = {
    name: "avatar"
}