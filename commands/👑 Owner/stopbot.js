var {
  MessageEmbed
} = require(`discord.js`);
var Discord = require(`discord.js`);
var config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
var emoji = require(`${process.cwd()}/botconfig/emojis.json`);
var {
  databasing, isValidURL
} = require(`${process.cwd()}/handlers/functions`);
module.exports = {
  name: "stopbot",
  category: "👑 Owner",
  aliases: ["botstop"],
  cooldown: 5,
  usage: "stopbot",
  type: "bot",
  description: "Stops the Bot, to set it OFFLINE",
  run: async (client, message, args, cmduser, text, prefix) => 

      require("child_process").exec(`pm2 stop index.js ${process.cwd().split(require("path").sep).pop()}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          message.reply({content : eval(client.la[ls]["cmds"]["owner"]["stopbot"]["variable4"])})
          return;
        }
      }),
    catch (e) {
      console.log(String(e.stack).dim.bgRed)
      return message.channel.send({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["owner"]["stopbot"]["variable5"]))
      ]});
    }

  }
