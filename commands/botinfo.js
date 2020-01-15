const Discord = require("discord.js");
const Client = require('../client/Client');
const client = new Client();

module.exports = {
    name: 'botinfo',
	description: 'Get the song that is playing.',
	execute(message) {
let totalSeconds = process.uptime();
let segundos = Math.floor(totalSeconds % 60);
let dias = Math.floor((totalSeconds % 31536000) / 86400);
let horas = Math.floor((totalSeconds / 3600) % 24);
let botping = new Date() - message.createdAt
let minutos = Math.floor((totalSeconds / 60) % 60);
var bi = new Discord.RichEmbed()

    .setTitle(' Informações do TheGalaxy ')
    .setThumbnail(message.guild.iconURL)
    .setColor('#8B008B')
    .addField(`<:637272543971246093:660508190135287819> | Meu Nome`,`\`\`\`ini\n [ TheGalaxy ]\n\`\`\``, true)
    .addField(`<:637272543971246093:660508190135287819> | Meu Prefixo`,`\`\`\`ini\n [ ! ]\n\`\`\``, true)
    .addField(`<:637272543971246093:660508190135287819> | Ping`,`\`\`\`ini\n [ ${botping}ms ]\n\`\`\``, true)
    .addField(`<:637272543971246093:660508190135287819> | Meu CPU`,`\`\`\`ini\n [ INTEL® CORE™ i7-6700K ]\n\`\`\``)
    .addField(`<:637272543971246093:660508190135287819> | Minha RAM`,`\`\`\`ini\n [ 4096.0 MB ]\n\`\`\``, true)
    .addField(`<:637272543971246093:660508190135287819> | Estou Online a`,`\`\`\`ini\n [ ${dias}d ${horas}h ${minutos}m ${segundos}s ]\n\`\`\``, true)
    .addField(`<:637272543971246093:660508190135287819> | Fui criado em`,`\`\`\`ini\n [ Julho 20º 2019, 23:42:00 ]\n\`\`\``)
    .addField(`<:637272543971246093:660508190135287819> | Comunidades`,`\`\`\`ini\n [ 31237 usúarios , 5 servidores ]\n\`\`\``)
    .addField(`<:637272543971246093:660508190135287819> | Meu criador`,`\`\`\`ini\n [ ᶠˡᵉˣ'𝔍𝔬𝔥𝔫' 会#4076 ]\n\`\`\``)
    .setTimestamp()
message.channel.send(bi);
}}