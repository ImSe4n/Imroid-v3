var {
  MessageEmbed
} = require(`discord.js`);
var Discord = require(`discord.js`);
var config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
var emoji = require(`${process.cwd()}/botconfig/emojis.json`);
var {
  databasing, isValidURL, delay
} = require(`${process.cwd()}/handlers/functions`);
const fs = require("fs")
module.exports = {
  name: "reloadbot",
  category: "👑 Owner",
  aliases: ["botreload"],
  cooldown: 5,
  type: "info",
  usage: "reloadbot",
  description: "Reloads the Bot, All Commands Events, etc.",
  run: async (client, message, args, cmduser, text, prefix) => {
        const index = require("../../index")
        await client.destroy()
      let tempmsg = await message.channel.send({embeds :[new MessageEmbed()
        .setColor(es.color).setFooter(client.getFooter(es))
        .setAuthor(`Reloading ...`, `https://images-ext-1.discordapp.net/external/ANU162U1fDdmQhim_BcbQ3lf4dLaIQl7p0HcqzD5wJA/https/cdn.discordapp.com/emojis/756773010123522058.gif`,  `https://dsc.gg/imroid-development`)
        .setTitle(eval(client.la[ls]["cmds"]["owner"]["reloadbot"]["variable4"]))
      ]})
      //clear the commands collection
      await client.commands.clear();
      //Delete all files from the cache
      fs.readdirSync("./commands/").forEach((dir) => {
        const commands = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
        for (let file of commands) {
          try{
            console.log(`SUCCESS :: ../../commands/${dir}/${file}.js`)
            delete require.cache[require.resolve(`../../commands/${dir}/${file}.js`)]
          }catch{ 
          }  
        }
      })
      //WAIT 1 SEC
      await delay(1000);
      //clear all events
      await client.removeAllListeners()
      //wait 1 Sec
      await delay(1000);
      //REMOVE ALL BASICS HANDLERS
      await client.basicshandlers.forEach(handler => {
        try{ delete require.cache[require.resolve(`../../handlers/${handler}`)]; console.log(`SUCCESS :: ../../handlers/${handler}`); }catch (e){ console.log(e.stack ? String(e.stack).dim : String(e).dim) }
      });
      //REMOVE ALL SOCIAL HANDLERS
      await client.socialhandlers.forEach(handler=>{
        try{ delete require.cache[require.resolve(`../../social_log/${handler}`)]; console.log(`SUCCESS :: ../../social_log/${handler}`); }catch (e){ console.log(e.stack ? String(e.stack).dim : String(e).dim) }
      })
      //REMOVE ALL OTHER HANDLERS
      await client.allhandlers.forEach(handler => {
        try{ delete require.cache[require.resolve(`../../handlers/${handler}`)]; console.log(`SUCCESS :: ../../handlers/${handler}`); }catch (e){ console.log(e.stack ? String(e.stack).dim : String(e).dim) }
      });
      client.Joblivelog.stop()
      client.Joblivelog2.stop()
      client.Jobyoutube.stop()
      client.Jobtwitterfeed.stop()
      client.Jobtiktok.stop()
      client.Jobautonsfw.stop()
      client.Jobroster.stop()
      client.Jobroster2.stop()
      client.Jobroster3.stop()
      client.Jobmembercount.stop()
      client.JobJointocreate.stop()
      client.JobJointocreate2.stop()
      client.Jobdailyfact.stop()
      client.Jobmute.stop()
      //wait 1 Sec
      await delay(1000);
      //Load the basics, (commands, dbs, events, etc.)
      await index.requirehandlers();
      //LOAD THE SOCIAL LOGS
      await index.requiresociallogs();
      //LOAD ALL OTHER HANDLERS
      await index.requireallhandlers();
      //SEND SUCCESS
      await delay(3000);
      await tempmsg.edit({embeds: [new MessageEmbed()
        .setColor(es.color).setFooter(client.getFooter(es))
        .setAuthor(`Successfully Reloaded:`, `https://cdn.discordapp.com/emojis/833101995723194437.gif?v=1`, `https://dsc.gg/imroid-development`)
        .setTitle(eval(client.la[ls]["cmds"]["owner"]["reloadbot"]["variable6"]))
      ]})
    }, catch (e) {
      console.log(String(e.stack).dim.bgRed)
      return message.channel.send({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.erroroccur)
        .setDescription(eval(client.la[ls]["cmds"]["owner"]["reloadbot"]["variable7"]))
      ]});
    }
  }
