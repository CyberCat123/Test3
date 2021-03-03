const Discord = require("discord.js");
const got = require('got');

const client = new Discord.Client();

const prefix = "c!";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs. readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.user.setActivity('c!help | ily <3', { type: 'PLAYING' });
  });


client.on('message', message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();


  
  if (command === 'discord'){
    client.commands.get('discord').execute(message, args, Discord);
  } else if (command === 'invite'){
    client.commands.get('invite').execute(message, args, Discord);
  } else if (command === '8ball'){
    client.commands.get('8ball').execute(message, args);
  } else if (command === 'ping'){
    client.commands.get('ping').execute(message, args);
  } else if (command === 'help'){
    client.commands.get('help').execute(message, args);
  } else if (command === 'qotd'){
    client.commands.get('qotd').execute(message, args);
  } else if (command === 'avatar'){
    client.commands.get('avatar').execute(message, args);
  }     if (message.content === "c!meme") {
    const embed = new Discord.MessageEmbed()
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${memeTitle}`)
        embed.setURL(`${memeUrl}`)
        embed.setImage(memeImage)
        embed.setColor('RANDOM')
        embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
        message.channel.send(embed);
        
      })
    
  } 
}
  
  
  
);

client.login('Nzk3OTIxNzg3NjY5MjUwMDg5.X_tgkg.j65Amb-P4ZsSlqhlkKk5EM21It0');