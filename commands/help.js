module.exports = {
	name: 'help',
    description: 'Help!',
    aliases: ['cmd', 'cmds'],
	execute(Discord, client, message, args) {

        var helpEmbed = new Discord.MessageEmbed()
            .setTitle(`Help has arrived!`)
            .setAuthor('MindyBOT', client.user.avatarURL())
            .setDescription('Use ( * ) as a prefix to use the available commands.')
            .addFields(
                { name: 'help', value: 'Use this to see all \navailable commands \n Aliases: \`help\`, \`cmd\`, \`cmds\`', inline: true },
                { name: 'ping', value: 'Returns the \ncurrent ping.', inline: true },
                { name: 'uptime', value: 'Displays the \ncurrent uptime', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'Placeholder', value: 'Some value here', inline: true },
                { name: 'Placeholder', value: 'Some value here', inline: true },
                { name: 'Placeholder', value: 'Some value here', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '\`Admin commands 🠗\`', value: 'admins only', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'reload {command}', value: 'Reloads the \nspecified command.', inline: true },
                { name: 'clear {amount}', value: 'Clears the specified \namount [ 1-100 ]', inline: true },
                { name: 'Placeholder', value: 'Some value here', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'Placeholder', value: 'Some value here', inline: true },
                { name: 'Placeholder', value: 'Some value here', inline: true },
                { name: 'Placeholder', value: 'Some value here', inline: true },
                { name: '\u200B', value: '\u200B' },

            )
            .setTimestamp()
            .setFooter('Made by Emil Warelius', client.user.avatarURL())
            .setColor("#"+((1<<24)*Math.random()|0).toString(16))
            
    
            message.channel.send(helpEmbed);
        
	},
};