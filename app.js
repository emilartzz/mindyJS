const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

const auth = require('./auth.json');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log(client.user.username + " is now online!");
    client.user.setActivity(`[${membersCount}] members in here raging | Use *help to see all commands`, {type: "WATCHING"});

    setInterval(() => {
        let membersCount = client.guilds.cache.map(guild => guild.memberCount).reduce((a, b) => a + b, 0)
        client.user.setActivity(`[${membersCount}] members in here raging | Use *help to see all commands`, {type: "WATCHING"});
    }, 1000 * 60 * 30);

});

client.on('message', message => {

    if (!message.content.startsWith(auth.prefix) || message.author.bot) return;

    const args = message.content.slice(auth.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return;

    try {
        command.execute(Discord, client, message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

});

client.login(process.env.BOT_TOKEN);