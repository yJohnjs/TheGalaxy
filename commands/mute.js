
module.exports = {
    name: 'mute',
	description: 'Get the song that is playing.',
	execute(message) {
        const prefix = '!'
        const msgs = message.content.slice(prefix.length).trim().split(/ +/g);
let rMember = message.mentions.members.first();
if (!rMember) return message.reply("Gajo não encontrado!");

let motivo = msgs.slice(2).join(' ');

let recebeRole = message.guild.roles.find("name", "TheGalaxyMuted");
if (!recebeRole) return message.reply("Cargo não encontrado,tente novamente!");

rMember.addRole(recebeRole)
message.channel.send(rMember + " foi mutado.\nMotivo: " + motivo + "http://gph.is/2908kxV");
}}