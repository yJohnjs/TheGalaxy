const Discord = require("discord.js");

module.exports = {
    name: 'serverinfo',
	description: 'Get the song that is playing.',
	execute(message) {
function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " dias") + " atrás";
};
let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
const embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField(`<:637272543971246093:660508190135287819> | Nome Do Servidor`,`\`\`\`ini\n [ ${message.guild.name} ]\n\`\`\``)
    .addField(`<:637272543971246093:660508190135287819> | ID do Servidor`,`\`\`\`ini\n [ ${message.guild.id} ]\n\`\`\``)
    .addField(`<:637272543971246093:660508190135287819> | Dono do Servidor`,`\`\`\`ini\n [ ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator} ]\n\`\`\``)
    .addField(`<:637272543971246093:660508190135287819> | Usúarios no Servidor`,`\`\`\`ini\n [ ${message.guild.members.size} ]\n\`\`\``)
    .addField(`<:637272543971246093:660508190135287819> | Level de Verficação`,`\`\`\`ini\n [ ${verifLevels[message.guild.verificationLevel]} ]\n\`\`\``)
    .addField(`<:637272543971246093:660508190135287819> | Canais`,`\`\`\`ini\n [ ${message.guild.channels.size} ]\n\`\`\``)
    .addField(`<:637272543971246093:660508190135287819> | Cargos`,`\`\`\`ini\n [ ${message.guild.roles.size} ]\n\`\`\``)
    .addField(`<:637272543971246093:660508190135287819> | Data de Criação`,`\`\`\`ini\n [ ${message.channel.guild.createdAt.toUTCString().substr(0, 16)}, ${checkDays(message.channel.guild.createdAt)} ]\n\`\`\``)
    .setColor('#8B008B')
    .setFooter(message.author.tag, message.author.displayAvatarURL)
    .setThumbnail(message.guild.iconURL)
message.channel.send({embed});
}}

module.exports.help = {
name:"serverinfo"
}