module.exports = {
	name: 'help',
    description: 'Specifies every command available',
	execute(message, prefix) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed();
        embed.addField(`8ball`, `Ask a question and it responds with what it thinks`);
        embed.addField(`discord`, `Sends you to our advertised server.`);
        embed.addField(`avatar`, `Displays a users avatar, make sure to ping.`);
        embed.addField(`ping`, `Shows the bots uptime an ping`);
        embed.addField(`invite`, `Invite the bot to your server! __**CURRENTLY LOCKED!**__`);
        embed.addField(`meme`, `Sends a meme from Reddit.`);
        embed.addField(`qotd`, `Question Of The Day!`);
        embed.setFooter(`Bot prefix is ${prefix}`);
        embed.setColor('RANDOM');
        message.channel.send(embed);
	}
};