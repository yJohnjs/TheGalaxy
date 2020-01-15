const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'registrar',
	description: 'Pong!',
	async execute(message) {
        const args = message.content.slice(1).split(/ +/);
        const homem = message.guild.roles.get("663872818253135872");
        const mulher = message.guild.roles.get("663872948414840832");
        const usuario = message.mentions.members.first() || message.guild.members.get(args[0])
        const embed = new Discord.RichEmbed()
        .setTitle("Usúario inexistente!")
        .setColor('#8B008B')
        mention = message.mentions.members.first()
        
        if(!usuario) return message.channel.send(embed)
        let cargo = message.guild.roles.find(r => r.name === "Registrado");
        const embedcargo1 = new Discord.RichEmbed()
        .setTitle("O usúario precisa do cargo Feminino ou Masculino!")
        .setColor('#8B008B')

        if(!usuario.roles.has(homem.id || mulher.id)) return message.channel.send(embedcargo1)
        const embedcargo2 = new Discord.RichEmbed()
        .setTitle("O usúario ja está registrado!")
        .setColor('#8B008B')
        if(usuario.roles.has(cargo.id)) return message.channel.send(embedcargo2)
        const embedcargo3 = new Discord.RichEmbed()
        .setTitle("O usúario foi registrado com sucesso!")
        .setColor('#8B008B')
        const usu = new Discord.RichEmbed()
        .setTitle("Você foi registrado no servidor!")
        .addField("Parabéns agora você já está registrado em nosso servidor!", "Obrigado por registrar-se!")
        .addField(`Seu registrador foi:`, `${message.author}`)
        .addField(`Ele não registrou-te ou não pediu para se registrar? Entre em contato com:`, `<@347915559918239745>`)
        .setThumbnail(message.guild.iconURL)
        .setColor('#8B008B')
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        if(!usuario.roles.has(cargo.id)) {
            usuario.addRole(cargo.id)
            return mention.send(usu), message.channel.send(embedcargo3)
        }
    }}