module.exports = {
    name: 'uptime',
    description: 'Sends the current uptime for the bot.',
    aliases: ['timeup'],
    execute(Discord, client, message, args) {

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
    
        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        var sendUptime = new Discord.MessageEmbed()
            .setTitle(`Current uptime!`)
            .setAuthor('MindyBOT', client.user.avatarURL())
            .addFields(
                { name: 'Uptime:', value: `Current uptime : ${uptime}`, inline: true },
            )
            .setTimestamp()
            .setFooter('Made by Emil Warelius', client.user.avatarURL())
            .setColor("#"+((1<<24)*Math.random()|0).toString(16))
    
        message.channel.send(sendUptime);
      }

  }