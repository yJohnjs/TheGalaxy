const Discord = require("discord.js");
module.exports = {
    name: 'hug',
	description: 'limpa!',
	async execute(message) {
let user = message.mentions.users.first();
        if(message.mentions.users.size < 1) return message.reply("Você precisa mencionar alguém.")
        if(user.id == message.author.id) return message.reply("Você não pode abraçar a si mesmo.")
        var HugEmbed = new Discord.RichEmbed()
        .setColor('#8B008B')
        .setTitle(`**${message.author.username}** deu um abraço no(a) **${user.username}**`)
        .setImage('https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif')
        .setFooter(message.author.tag, message.author.displayAvatarURL).setTimestamp()
    
        message.channel.send(HugEmbed)
}}

exports.help = {
    name: "hug"
}