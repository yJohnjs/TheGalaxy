const Discord = require("discord.js");

module.exports = {
    name: 'icone',
	description: 'Get the song that is playing.',
	execute(message) {

    const { RichEmbed } = require("discord.js");
    let nyfofo = message.guild.iconURL || "https://loritta.website/assets/img/unknown.png";
    let nylindo = new RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor('#8B008B')
        .setImage(`${nyfofo}${message.guild.iconURL ? "?size=2048" : ""}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp();
    message.channel.send(nylindo);
}}

module.exports.help = {
    name:"icone"
    }