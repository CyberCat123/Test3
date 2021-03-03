const Discord = require('discord.js');

module.exports = {
    name: 'qotd',
    description: 'questions ',
    execute(message) {

            let answers = [
                'If you could start a YouTube channel, what would it be?',
                'How many times have you had birds poop on you?',
                'What else is on your desk besides a computer?',
                'Sushi or Pizza? ',
                'Burger King or Mcdonalds?',
               'Should Pinapple be on pizza?',
                'White or Dark Chocolate?',
                'Peanut Butter or Nutella?',
                'Peanut Butter or Nutella?',
                'PS4 or XBOX',
                'Android or Apple?'
            ];
            let response = answers[Math.floor(Math.random() * answers.length)];

            let embed = new Discord.MessageEmbed()
                .setTitle('QOTD!')
                .setColor('RANDOM')
                .addField('Answer: ', response);
            message.channel.send(embed);

        }
    };