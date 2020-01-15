const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'kick',
	description: 'Pong!',
	async execute(message) {

        const prefix = '!'
const args = message.content.slice(prefix.length).trim().split(/ +/g);
if (message.member.hasPermission("KICK_MEMBERS")) {

    if (message.guild.me.hasPermission("KICK_MEMBERS")) {

        let usuario = message.mentions.users.first();
        if (!usuario) return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, Você esqueçeu de **mencionar** o membro que deseja kickar!`);

        let razao = args.slice(1).join(" ")
        if (!razao) return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, Você se esqueceu de colocar a **razão**!`);

        message.guild.member(usuario).kick(razao)

        return message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, O usuario **${usuario.username}** foi kickado com sucesso!`);

    } else {
        message.channel.send(`\`${message.guild.member(message.author).nickname || message.author.username}\`, Eu não tenho a permissão necessária para fazer isto. **KICK_MEMBERS**!`)
    }

}

}}

module.exports.help = {
    name: "kick"
}