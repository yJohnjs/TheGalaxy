const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: 'tapa',
	description: 'bate!',
	async execute(message) {

        const args = message.content.slice(1).split(/ +/);
    let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!slapUser) return message.channel.send("Mencione alguém para dar um tapa.");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);

    let slapEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** Deu um tapa em **${message.mentions.users.first().username}**`)
    .setImage(body.url)
    .setColor('#8B008B')
    .setFooter(`Tapa dado por ${message.author.username}`, message.author.displayAvatarURL)

    message.channel.send(slapEmbed)

}}

module.exports.help = {
  name: "tapa"
}