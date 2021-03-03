module.exports = {
    name: 'discord' ,
    discription: "discord",
    execute: (message, args, Discord) => {

const embed = new Discord.MessageEmbed()
.setTitle('Join the Mystical Lobby! \:black_heart:')
.addField('Press Here to Join!', 'https://discord.gg/h4HJmXHgAd')
.setDescription('<3')
.setThumbnail('https://cdn.discordapp.com/icons/763926412159090708/c6366edbaa757907a7823dbb6c15ea20.png?size=128')
.setColor('RANDOM')

message.channel.send(embed)
  }
}
