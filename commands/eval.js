const Discord = require("discord.js");

module.exports = {
    name: 'eval',
	description: 'Get the song that is playing.',
async	execute(message) {
  const token = "YOUR_TOKEN"
  const Client = require('../client/Client');
  const client = new Client();
    const args = message.content.slice(1).split(/ +/);
    const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }
      const { inspect } = require("util")
    const ownerID = '139048442319077387'
    if(message.author.id == ownerID) {
      try {
        var codec = args.join(" ");
        codec = codec.replace(new RegExp('--silent', 'g'), '')
        let code = eval(codec)
        let _code = require('util').inspect(code, { depth: 0 })
        _code = `${_code.replace(new RegExp(`${token}|${process.env.MONGO}`, 'g'), `tokentop!`)}`
        let hrStart = process.hrtime()
        let hrDiff;
        hrDiff = process.hrtime(hrStart)
        
        let embed = new Discord.RichEmbed()
            .setColor("#00FF00")
            .setTitle(`${this.client} Executado.`)
            .addField('🕐 Executado em', `\`\`\`${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms\`\`\``)
            .addField('📤 Entrada', `\`\`\`js\n${codec}\`\`\``)
            .addField('📥 Saida', `\`\`\`js\n${_code}\n\`\`\``)
            .addField('❓ Tipo', `\`\`\`js\n${typeof code}\n\`\`\``);
        if(!message.content.endsWith('--silent')) return message.channel.send(embed)
    } catch (e) {
        let embedt = new Discord.RichEmbed()
          .setColor("#ff0022")
          .setTitle(`${this.client} Erro.`)
          .addField("📤 Entrada", `\`\`\`js\n${codec}\n\`\`\``)
          .addField(`${this.client} Erro`, `\`\`\`js\n${e}\n\`\`\``)
        message.channel.send(embedt);
    }
  }}}
