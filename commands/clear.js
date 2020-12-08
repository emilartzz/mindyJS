module.exports = {
    name: 'clear',
    description: 'Clears the specified amount of messages!',
    aliases: ['clears', 'delete'],
    execute(Discord, client, message, args) {

        const amount = args.join(' ');

        if (!amount) return message.reply("You have to specify an amount of messages to delete.");
        if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!');

        if (amount > 100) return message.reply("You cannot clear more than 100 messages at once");
        if (amount < 1) return message.reply("You must specify an amount between 1-100");

        message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)
        });

        var clearEmbed = new Discord.MessageEmbed()
            .setTitle(`Cleared messages`)
            .addFields(
                { name: 'Success!', value: '\`Cleared a total of ' + amount + ' messages\`', inline: true },
            )
            .setTimestamp()
            .setFooter('Made by Emil Warelius', client.user.avatarURL())
            .setColor("#"+((1<<24)*Math.random()|0).toString(16))
            
    
            message.channel.send(clearEmbed).then((messages) => {
                messages.delete({ timeout: 10000 })
            });

    }
}