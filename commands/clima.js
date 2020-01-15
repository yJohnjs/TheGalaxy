const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = {
    name: 'clima',
	description: 'Pong!',
	async execute(message) {
        const prefix = '!'
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const weather = require("weather-js");
weather.find({ search: args.join(' '), degreeType: 'C', lang: 'pt-BR' }, (err, result) => {
    if (err) throw err;
    result = result[0];
    if (!result) {
        message.channel.send("Fale um local que exista, ou coloque o nome corretamente!");
        return;
    }
    var current = result.current;
    var location = result.location;
    const embed = new Discord.RichEmbed()
        .setAuthor(`Tempo para: ${location.name}`)
        .setDescription(`${current.skytext}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .addField("Fuso horário:", `UTC${location.timezone >= 0 ? "+" : ""}${location.timezone}`, true)
        .addField("Tipo de grau:", location.degreetype, true)
        .addField('Temperatura:', `${current.temperature}° C`, true)
        .addField('Sensação térmica:', `${current.feelslike}° C`, true)
        .addField('Ventos:', current.winddisplay, true)
        .addField('Umidade:', `${current.humidity}%`, true)
        .setColor('#8B008B')
        .setTimestamp();
    message.channel.send({ embed });
});
}}

module.exports.help = {
    name: "clima"
}