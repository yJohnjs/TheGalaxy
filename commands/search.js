const search = require('yt-search');
const Discord = require('discord.js');
const client = new Discord.Client();
 
module.exports = {
    name: 'search',
	description: 'Get the song that is playing.',
async	execute(message) {
     
    const args = message.content.slice(1).split(/ +/);
    search(args.join(' '), function(err, res) {
    
        if (err) return message.reply('**Algo está errado, tente outra vez**');
        
        let videos = res.videos.slice(0, 10);
        
        let resp = '';
        
        for (var i in videos) {
          resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
          
        }
        
        resp += `\n **Escolha um número entre** \`1-${videos.length}\``;
        
        message.channel.send(resp);
        
        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
        
        const collector = message.channel.createMessageCollector(filter);
        
        collector.videos = videos;
        
        collector.once('collect', function(m){
          let commandFile = require('./play.js');
          commandFile.execute(client, message, [this.videos[parseInt(m.content)-1].url]);
        });
      });
    }
}
 
module.exports.help = {
    name: "search",
    description: "Zoeken naar liedjes"
}