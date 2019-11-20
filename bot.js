const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("646364658424479755")
setInterval(function() {
channel.send(`زبادي زيادي زيادي زيادي زيادي زيادي`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
