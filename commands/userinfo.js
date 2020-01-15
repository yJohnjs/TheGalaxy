const Discord = require("discord.js");
const Client = require('../client/Client');
const client = new Client();

module.exports = {
    name: 'userinfo',
	description: 'Get the song that is playing.',
	execute(message) {
let inline = true
    let resence = true
    const status = {
        online: "Online",
        idle: "Ausente",
        dnd: "Ocupado/Não Pertube",
        offline: "Offline/Escondido"
      }
      const args = message.content.slice(1).split(/ +/);
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
const User = message.mentions.users.first() || message.author
let target = message.mentions.users.first() || message.author
const moment = require('moment');
const contaCriada = moment(User.createdTimestamp).format('lll') // Formato DD do MMM do AAAA às hh:mm
const diasContaCriada = moment.duration(message.createdTimestamp - User.createdTimestamp).asDays() // Dias de criaçao da conta


if (member.user.bot === true) {
    bot = "Sim";
  } else {
    bot = "Não";
  }

            let embed = new Discord.RichEmbed()
                .setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setColor('#8B008B')
                .addField("<:637272543971246093:660508190135287819> | Nome do usúario",`\`\`\`ini\n [ ${member.user.tag} ]\n\`\`\``)
                .addField("<:637272543971246093:660508190135287819> | ID do usúario",`\`\`\`ini\n [ ${member.user.id} ]\n\`\`\``)
                .addField("<:637272543971246093:660508190135287819> | Apelido",`\`\`\`ini\n [ ${member.nickname !== null ? `${member.nickname}` : "❌ Não possui"} ]\n\`\`\``)
                .addField("<:637272543971246093:660508190135287819> | Bot",`\`\`\`ini\n [ ${bot} ]\n\`\`\``)
                .addField("<:637272543971246093:660508190135287819> | Status",`\`\`\`ini\n [ ${status[member.user.presence.status]} ]\n\`\`\``)
                .addField("<:637272543971246093:660508190135287819> | Jogando",`\`\`\`ini\n [ ${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "Não está jogando"} ]\n\`\`\``)
                .addField("<:637272543971246093:660508190135287819> | Cargos",`\`\`\`ini\n [ ${member.roles.filter(r => r.id !== message.guild.id).map(roles => `${roles.name}`).join(" , ") || "Sem cargos"} ]\n\`\`\``)
                .addField("<:637272543971246093:660508190135287819> | Conta criada em",`\`\`\`ini\n [ ${contaCriada} , ${Math.floor(diasContaCriada)} dias ]\n\`\`\``)
                .setFooter(`Informações de ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);
    }}