module.exports = {
    name: 'ping',
    discription: "finds the bots ping",
    execute(message, args) {
       message.channel.send('Finding bots ping...').then(msg => {
          const ping = msg.createdTimestamp - message.createdTimestamp;
          msg.edit(`:ping_pong: | Pong! My ping is ${ping}ms!`);
    })
}
}