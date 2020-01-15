const Discord = require ("discord.js");
const fs = require("fs");

module.exports = {
  name: 'help',
  description: 'Play a song in your channel!',
  async execute(message) {

var embed = new Discord.RichEmbed()


      .setColor('#8B008B')
      .setTitle('Olá, este é meu painel de comandos. Fique a vontade para explorar!')
      .addField('📋 | Comandos de Informação', "Comandos sobre usúarios,servidores,etc!")
      .addField('🔧 | Comandos Administradores', "Comandos feitos para os Staffs!")
      .addField('😜 | Comandos de Diversão', "Comandos para seu divertimento!")
      .addField('🎵 | Comandos de Música!', "Comandos para ouvir música!")
      .setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL).setTimestamp()

    var msg = await message.author.send(embed) 
    const args = message.content.slice(1).split(/ +/);
const pidor = message.guild.members.get(args[0]) || message.member;
  
let chanEmbed = new Discord.RichEmbed()
.setColor('#8B008B')
.setDescription(`${pidor}, da uma olhada no privado!`);

    message.channel.send(chanEmbed)
  
var emoji1 = await msg.react("📋")
var emoji2 = await msg.react("🔧")
var emoji3 = await msg.react("🎵")
var emoji4 = await msg.react("😜")
var emoji5 = await msg.react("🔙")

  var c = msg.createReactionCollector((r, u) => r.me && u.id == message.author.id)
  c.on("collect", async r => {
    
    switch(r.emoji.name) {
        
      case "📋" : 
  emoji1.remove(message.author.id)
  var infoEmbed = new Discord.RichEmbed()
  .setTitle("📋 | Comandos de informação!")
         
.addField("!ping", `➤ Mostra o ping atual do bot.`)
.addField("!serverinfo", `➤ Mostra variadas informações sobre o servidor.`)
.addField("!userinfo [User]", `➤ Mostra variadas informações sobre o usuário mencionado.`)
.addField("!botinfo", `➤ Mostra algumas estatísticas minhas.`)
.addField("!help", `➤ Mostra esta mensagem maravilhenta que você está vendo neste momento.`)
.setColor('#8B008B').setTimestamp()
.setFooter(`Requisitado por ${message.author.username}`, message.author.displayAvatarURL).setTimestamp()

          msg.edit(infoEmbed)

      break
        
      case "🔧" :
 emoji2.remove(message.author.id)
  var staffEmbed = new Discord.RichEmbed()
  .setTitle("🔧 | Comandos Administradores")
.addField("!ban [User] [Razão]", `➤ Bane o usuário com razão.`)
.addField("!kick [User] [Razão]", `➤ Expulsa o usuário com razão.`)
.addField("!clear [n° de mensagens para apagar]", `➤ Limpa mensagens de algum canal.`)
.addField("!mute [User]", `➤ Muta o usuário. (Necessario criar o cargo "EVILMUTE")`) 
.addField("!unmute [User]", `➤ Desmuta o usuário. (Necessario criar o cargo "EVILMUTE")`)
.addField("!unban [User]", `➤ Desbane o usuário.`)
.addField("!divulgador [User]", `➤ Mostra estatisticas do convite do usúario mencionado.`)
.addField("!roleinfo [Cargo]", `➤ Mostra estatisticas do cargo.`)
.setColor('#8B008B').setTimestamp()
.setFooter(`Requisitado por ${message.author.username}`, message.author.displayAvatarURL).setTimestamp()
  
          msg.edit(staffEmbed)
        
      break
       
           
      case "🎵" : 
      emoji3.remove(message.author.id)
      var infoEmbed = new Discord.RichEmbed()
      .setTitle("🎵 | Comandos de Música!")
             
    .addField("!play [URL ou Nome da Música]", `➤ Toca a música desejada.`)
    .addField("!skip", `➤ Pula a música atual para proxima da fila.`)
    .addField("!volume", `➤ Configura o volume da música.`)
    .addField("!stop", `➤ Para todas as músicas e me remove da call.`)
    .addField("!nowplaying", `➤ Mostra a música que está sendo tocada neste momento.`)
    .setColor('#8B008B').setTimestamp()
    .setFooter(`Requisitado por ${message.author.username}`, message.author.displayAvatarURL).setTimestamp()
    
              msg.edit(infoEmbed)
    
      break
      
          

      case "😜" :
 emoji4.remove(message.author.id)
var funEmbed = new Discord.RichEmbed()
.setTitle("😜 | Comandos de Diversão!")       
.addField("!icone", `➤ Mostra o icone do servidor.`)
.addField("!avatar [User]", `➤ Motra o avatar do usuário mencionado.`) 
.addField("!userinfo [User]", `➤ Mostra estatisticas do usúario mencionado.`)
.addField("!clima [Local]", `➤ Mostra o clima do local.`)
.addField("!userinfo [User]", `➤ Mostra estatisticas do usúario mencionado.`)
.addField("!hug [User]", `➤ Mostra estatisticas do usúario mencionado.`)
.addField("!kiss [User]", `➤ Beija o usúario mencionado.`)
.addField("!ship [User] [User]", `➤ Shipa os usúarios mencionados.`)
.addField("!tapa [User]", `➤ Bate no usúario mencionado.`)
.setColor('#8B008B').setTimestamp()
.setFooter(`Requisitado por ${message.author.username}`, message.author.displayAvatarURL).setTimestamp()

          msg.edit(funEmbed)
      break
        
      case "🔙" :
  emoji5.remove(message.author.id)
 var embed = new Discord.RichEmbed()
 
 .setColor('#8B008B')
 .setTitle('Olá, este é meu painel de comandos. Fique a vontade para explorar!')
 .addField('📋 | Comandos de Informação', "Comandos sobre usúarios,servidores,etc!")
 .addField('🔧 | Comandos Administradores', "Comandos feitos para os Staffs!")
 .addField('😜 | Comandos de Diversão', "Comandos para seu divertimento!")
 .addField('🎵 | Comandos de Música!', "Comandos para ouvir música!")
 .setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL).setTimestamp()

    msg.edit(embed) 
        
    }
    
  })
  
  }}
  
  module.exports.help = {
     name: "help" 
 }