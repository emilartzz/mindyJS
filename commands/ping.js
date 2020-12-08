module.exports = {
	name: 'ping',
    description: 'Ping!',
	execute(Discord, client, message, args) {

        message.channel.send("Pinging...").then(m =>{
            var myPing = m.createdTimestamp - message.createdTimestamp;

            var pingEmbed = new Discord.MessageEmbed()
            .setAuthor(`Your ping is ${myPing}ms`)
            .setColor("#"+((1<<24)*Math.random()|0).toString(16))
    
            m.edit(pingEmbed);
        })
	},
};