const Discord = require("discord.js");

module.exports = {
    name: 'divulgador',
	description: 'Get the song that is playing.',
async	execute(message) {

var user = message.mentions.users.first();

if (!user) user = message.author;

var targetInvites = await message.guild.fetchInvites();

var invitesUses = 0;

targetInvites.forEach(invite => {
    if (invite.inviter.id === user.id) {
        invitesUses += invite.uses;
    }
});

var embed = new Discord.RichEmbed()
    .setThumbnail(user.displayAvatarURL)
    .setTitle(`Nick : ${user.tag}`)
    .addField("Membros Recrutados :", `\`\`\`md\n# ${invitesUses} Membros\`\`\``)
    .setColor('#8B008B')
    .setFooter(message.author.tag, message.author.displayAvatarURL)
    .setTimestamp();

message.channel.send(embed)
}}

module.exports.help = {
    name:"divulgador"
    }