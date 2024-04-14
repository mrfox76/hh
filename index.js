const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();




const fs = require('fs');
const folder = fs.readdirSync('./commands/').filter(file=> file.endsWith('.js'))
for (const file of (folder))
{
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command)
}
client.on('message',async message=>{
  const [cmd] = message.content.split(' ');
  if (!message.guild) return;
  if (message.author.bot) return;
  client.commands.find(command => {
    if (command.name.toLowerCase() == cmd.slice(0).toLowerCase() && !command.name.startsWith("$P")  || command.aliases && command.aliases.includes(cmd.slice(0).toLowerCase()) && !command.name.startsWith("$P")){
      const args = message.content.slice(cmd.slice(0).length).trim().split(/ +/);
      command.run(message,args)
    } 
  });
})














client.on('ready',()=>{
  console.log("The bot is online");
})
client.login(process.env.token);


const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello Express app!')
});
app.listen(3000, () => {
console.log('server started');
});




