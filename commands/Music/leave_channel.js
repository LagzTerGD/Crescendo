const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
  {
    constructor(client)
    {
       super(client,{
         name: 'leave',
         group: 'music',
         memberName: 'leave',
         description: 'Leaves the voice channel of the commander'
       
        });
    }
    async run(message, args)
    {
       if(message.guild.voiceConnection)
       {
        message.guild.voiceConnection.disconnect();
        message.reply('Succesfully left the voice channel!')
       }
      else
      {
          message.reply('I must be in a voice channel for you to banish me!');
      }
    }

  }
    

    module.exports = LeaveChannelCommand;
