const Discord = require('discord.js');

module.exports = {
    name: 'ping',
	description: 'Pong!',
	async execute(message) {

    let botping = new Date() - message.createdAt;
    const bot = new Discord.Client();
    message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("🏓 Pong:")
        .addField('BOT: ', Math.floor(botping) + 'ms')
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor('#8B008B').setTimestamp()

        message.channel.send(pEmbed);
}}

module.exports.help = {
    name: "ping"
}