const moment = require("moment")
moment.locale('pt-BR')
const COR = "ffffff";
const Discord = require("discord.js");

module.exports = {
    name: 'roleinfo',
	description: 'Get the song that is playing.',
	execute(message) {

let Role = message.mentions.roles.first();
if (Role) {
    let administrador;
    if (Role.hasPermission("ADMINISTRATOR") === true) administrador = "Sim :)";
    if (Role.hasPermission("ADMINISTRATOR") === false) administrador = "Não :/";

    let rolehoist;
    if (Role.hoist === true) rolehoist = "Sim";
    if (Role.hoist === false) rolehoist = "Não";

    let rolementionable;
    if (Role.mentionable === true) rolementionable = "Sim";
    if (Role.mentionable === false) rolementionable = "Não";

    let embedroleinfo = new Discord.RichEmbed()
        .setTitle("Informações dessa role:")
        .setColor('#8B008B')
        .addField(`Nome:`, `${Role.name}`)
        .addField(`Role ID:`, `${Role.id}`)
        .addField(`Código HEX:`, `${Role.hexColor}`)
        .addField(`Criado a:`, `${moment(Role.createdAt).format('LLLL')}`)
        .addField(`Administrador:`, `${administrador}`)
        .addField(`Quantidade de usuários que tem a role:`, `${Role.members.size}`)
        .addField("Separa dos onlines:", `${rolehoist}`)
        .addField("Dá para mencionar:", `${rolementionable}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL)
    message.channel.send(embedroleinfo)
} else {
    return message.channel.send(`${message.author}, forneça um role válido.`)
}
}}

module.exports.help = {
    name:"roleinfo"
    }