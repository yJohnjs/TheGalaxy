const Discord = require('discord.js');
const prefix = '!'
module.exports = {
    name: 'clear',
    description: 'limpa!',
	async execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const bot = new Discord.Client();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Você não possuí permissão para isto.');
    let mensagemDeletar = args.slice(1).join(" ");
    if(mensagemDeletar < 2 || mensagemDeletar > 100) message.reply('Você só pode limpar de 2 a 100 mensagens.');
    if(args.lengt === 1) return message.reply('Use !clear (Número de mensages) para o comando funcionar corretamente!');
    if(isNaN(args[1])) return message.reply('Você deve colocar um número.');

    try {
        message.channel.bulkDelete(mensagemDeletar)
        message.channel.send(`O chat foi limpo por ${message.author}, foram excluidas ${mensagemDeletar} mensagens!`);
    } catch (e) {
        console.log(e);
    }
}}

exports.help = {
    name: "clear"
}