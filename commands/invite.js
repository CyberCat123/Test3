module.exports = {
    name: 'invite' ,
    discription: "bot link.",
execute: (message, args, Discord) => {

const embed = new Discord.MessageEmbed()
.setTitle('Sorry!')
.setColor('RANDOM')
.addField('Sadly! this command is locked. The bot is not ready to go public, sorry! _psst, i don\'t know how to get rid of the undefined_n')

message.channel.send(embed)
  }
}