global.servers = {};
const Commando = require ('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTgwNDExNTg3NDE2OTQ4NzU2.XOZ-dw.qFgVd0HldR3v8gLMCOMLfxmI4nw';
bot.on('ready',() => {console.log('Ready')});
bot.on('message', function(message){
if(message.content == 'Hello')return message.channel.sendMessage('Hello, ' +message.author+ ', how are you?')});
    
    bot.registry.registerGroup('music', 'Music');
    bot.registry.registerGroup('simple', 'Simple');
    bot.registry.registerDefaults();
    bot.registry.registerCommandsIn(__dirname + '/commands');
    



bot.login(TOKEN);