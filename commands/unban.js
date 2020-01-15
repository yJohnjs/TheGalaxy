const Discord = require("discord.js");

module.exports = {
    name: 'unban',
	description: 'Get the song that is playing.',
	execute(message) {
        const prefix = '!'
        const msgs = message.content.slice(prefix.length).trim().split(/ +/g);
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const id = msgs[1];
if (!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send({
    embed: {
        description: `Eu não tenho a permissão para desbanir membros`
    }
})
let member = args[0]
let reason = args.slice(2).join(" ")
if (!reason) {
    reason = "Não informado"
}
if (!member) return message.channel.send({
    embed: {
        description: `Tu não me disse o membro que tenho que desbanir`,
    }
})
message.guild.unban(id).then(() => {
    let pEmbed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(":hammer: Unban")
    .addField("Membro Desbanido:", `undefined`)
    .addField("Desbanido por:", `${message.author.tag}`)
    .addField("Motivo:", `${reason}`)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
    .setColor('#8B008B')
    .setTimestamp()

message.channel.send(pEmbed);
})
}}

module.exports.help = {
    name:"unban"
    }