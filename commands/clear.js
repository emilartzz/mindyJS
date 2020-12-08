module.exports = {
    name: 'clear',
    description: 'Clears the specified amount of messages!',
    aliases: ['clears', 'delete'],
    execute(Discord, client, message, args) {

        const amount = args.join(' ');

        if (!amount) return message.reply("You have to specify an amount of messages to delete.");
        if (isNaN(amount)) return message.reply('The amount parameter isn`t a number!');

    }
}