const Discord = require("discord.js");

module.exports = {
    name: 'ban',
	description: 'Get the song that is playing.',
async	execute(message) {

    const prefix = '!'
    const msgs = message.content.slice(prefix.length).trim().split(/ +/g);
if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Tu não tens permissão suficiente!");
if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Minha permissão não é suficiente!");
let member = message.mentions.members.first();
if (!member) return message.reply("Por favor, mencione um usúario!");
if (!member.bannable) return message.reply("Eu não posso bani-lo,pois ele tens cargo superior ao teu!");
let reason = msgs.slice(2).join(' ');
if (!reason) reason = "Nenhuma razão fornecida";
await member.ban(reason)
    .catch(err => message.reply(`Desculpe, mas não consegui banir, ${message.author}.\nRelatório: ${err}`));

let pEmbed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setTitle(":hammer: Ban")
    .addField("Membro Banido:", `${member.user.tag}`)
    .addField("Banido por:", `${message.author.tag}`)
    .addField("Motivo:", `${reason}`)
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
    .setColor('#8B008B')
    .setTimestamp()

message.channel.send(pEmbed);
}}

module.exports.help = {
    name:"ban"
    }