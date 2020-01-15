const fs = require('fs')
const Discord = require('discord.js');
const Client = require('./client/Client');
const {
	prefix,
    token,
    GOOGLE_API_KEY,
} = require('./config.json');

const client = new Client();
client.commands = new Discord.Collection();
const bot = new Discord.Client();

const queue = new Map();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    
}

console.log(client.commands);

client.on('message', async message => {
	const args = message.content.slice(1).split(/ +/);
	const commandName = args.shift().toLowerCase();
	const command = client.commands.get(commandName);

	if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    console.log(`Um comando foi executado com sucesso, eu acho :p`);

	try {
		command.execute(message);
	} catch (error) {
		console.log(error);
    }
    
});

client.login(token);

client.on('ready', () => {
    console.log(`Logado: ${client.user.tag}!`);
    client.user.setActivity(`Evil!`, {
        type: "WATCHING",
        url: "https://www.twitch.tv/alanzoka"
      });
  });