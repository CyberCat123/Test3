const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    discription: "steals a users avatar",
    execute(message, args) {
        if (args[0]) {
            const user = message.mentions.users.first()
            if (!user) return message.reply('uh oh! theres an error in your request, please state a users pfp to steal. ')

            const otherIconEmbed = new Discord.MessageEmbed()
                .setTitle(`${user.username}'s Avatar!`)
                .setImage(user.displayAvatarURL());

            return message.channel.send(otherIconEmbed).catch(err => console.log(err));

        }

        const myIconEmbed = new Discord.MessageEmbed()
            .setTitle(`${message.author.username}'s Avatar!`)
            .setImage(message.author.displayAvatarURL());

        message.channel.send(myIconEmbed).catch(err => console.log(err));
    }
}