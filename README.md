# Public Bot and Support Server!

<a href="https://dsc.gg/imroid-development"><img src="https://discord.com/api/guilds/949744394825760778/widget.png?style=banner2"></a>
 
[**Invite the Public Version of this Bot**](dsc.gg/imroid-development) So you don't need to host it by yourself or [join my discord Server](https://dsc.gg/imroid-development) to get a custom hosted Bot for you!


# Important notes and thank ❤️
First of all, thanks for using this Source Code, it was and is a ton of work to create and maintain it!
That's why I'm asking everyone to [**donate a little bit of money**] join my [Discord Server](https://dsc.gg/imroid-development)!

# Installation Guide 🔥

## ✅ Hosting Requirements

<details>
  <summary>Click to expand</summary>

  * [nodejs](https://nodejs.org) version 16.6 or higher, i recommend the latest STABLE version
  * [python](https://python.org) version 3.8 or higher, to install the database `enmap` (better-sqlite3)
  * a VPS would be adviced, so you don't need to keep your pc/laptop/raspi 24/7 online! [click here for a debian setup](https://github.com/ImSe4n/Debian-Cheat-Sheet-Setup/wiki/)

</details>

## 🤖 Bot Requirements

<details>
  <summary>Click to expand</summary>

   1. Download the [Source Code]()
     * either by: `git clone https://github.com/ImSe4n/Imroid-v3`
     * or by downloading it as a zip from the releases or a branch
  
</details>

## 🎶 Music Requirements

<details>
  <summary>Click to expand</summary>

  *To have your Bot able to play music, you need to connect it to a lavalink Station!*
  *There are many public ones out there for example lavalink.eu*
  An example for a public configuration will be listed down below
   
  1. Make sure `Java 11` is installed on your System!
     * [Click here for a Download for **Windows**](https://downloads.milrato.eu/windows/java/jdk-11.0.11.exe) ​
  2. Download [Lavalink.jar](https://github.com/freyacodes/Lavalink/releases/download/3.4/Lavalink.jar)
     * here is a direct link: https://github.com/freyacodes/Lavalink/releases/download/3.4/Lavalink.jar
     * if you are on linux do this: `wget https://github.com/freyacodes/Lavalink/releases/download/3.4/Lavalink.jar` (prep: `apt-get install -y wget`)
  3. Download [application.yml](https://cdn.discordapp.com/attachments/734517910025928765/934084553751015475/application.yml)
     * Download my example, it's the configuration for the lavalink.jar file!
  4. Now put application.yml and Lavalink.jar in the same folder and start it
     * To start lavalink type: `java -jar Lavalink.jar`
     * Make sure to keep your terminal Open!
     * If you want to use something like `npm i -g pm2` to host it without keeping your terminal open type: `pm2 start java -- -jar Lavalink.jar`
  5. The settings like **password** in application.yml and **port** must be provided in the `botconfig/config.json` of the Bot
     * If you used the default settings, than no adjust ments are needed and it should look like this: 
     ```json
     {
        "clientsettings": {
            "nodes": [
                {
                    "host": "localhost",
                    "port": 2333,
                    "password": "youshallnotpass"
                }
            ]
        }
     }
     ```
  6. You don't want to host your own Lavalink?
     * [Here is a list of many free-to-use Lavalink Servers!](https://lavalink.darrennathanael.com/#how2host)
     * Or just use something like this: 
     ```json
     {
        "clientsettings": {
            "nodes": [
                {
                    "host": "lava.link",
                    "port": 80,
                    "password": "Anything for the Password"
                }
            ]
        }
     }
     ```

</details>

## 🤖 Configuration and Starting

<details>
  <summary>Click to expand</summary>

  **NOTE:** *you can do the exact same configuration inside of the `example.env` File, just make sure to rename it to `.env` or use environment variables!*
 
   1. Check `🎶 Music Requirements` that you started lavalink / use a valid public lavalink station
   2. Fill in all required data in `./botconfig/config.json` **NOTE:** *If you're on replit.com, it is exposed to everyone!(use .env instead)*
   3. Fill in all required data in the `.json` Files in `./social_log/` (`./social_log/streamconfig.json` & `./social_log/twitter.json`), if you want the SOCIAL LOGS to work! (the key `authToken` in streamconfig is not needed to be filled in!)
   4. You can adjust some settings in the other `./botconfig/*.json` Files, **BUT PLEASE __KEEP__ MY CREDITS & ADS!** This is the only way on how my hard work is "revenued"
   5. Now start the bot by typing opening a cmd in that folder and type: `node index.js` or `npm start`
     * If you don't want to keep the terminal open or if you're on linux, check out [pm2 (and my tutorial)](https://github.com/ImSe4n/Debian-Cheat-Sheet-Setup/wiki/4-pm2-tutorial) and type: `pm2 start --name Bot_Name index.js`
  
</details>

## ❓ Where to get which Api-Key(s)

<details>
  <summary>Click to expand</summary>

  **NOTE:** *you can do the exact same configuration inside of the `example.env` File, just make sure to rename it to `.env` or use environment variables!*
 
  1. `./botconfig/config.json`
     * `token` you can get from: [discord-Developers](https://discord.com/developers/applications)
     * `memer_api` you can get from: [Meme-Development DC](https://discord.gg/Mc2FudJkgP)
     * `spotify.clientSecret` you can get from: [Spotify-Developer](https://developer.spotify.com)
     * `spotify.clientID` you can get from: [Spotify-Developer](https://developer.spotify.com)
     * `fnbr` is a FNBR token, which you may get from [FNBRO.co](https://fnbr.co/api/docs) (needed for fnshop)
     * `fortnitetracker` is a FORTNITE TRACKER token, which you may get from [fortnitetracker.com](https://fortnitetracker.com/site-api) (needed for fnstats)
  2. `./social_log/streamconfig.json`
     * `twitch_clientID` you can get from: [Twitch-Developer](https://dev.twitch.tv/docs/api) ([developer-console](https://dev.twitch.tv/console))
     * `twitch_secret` you can get from: [Twitch-Developer](https://dev.twitch.tv/docs/api) ([developer-console](https://dev.twitch.tv/console))
     * `authToken` is not required to be filled in --> will be done automatically
  3. `./social_log/twitter.json`
     * `consumer_key` you can get from: [twitter Developers](https://developer.twitter.com)
     * `consumer_secret` you can get from: [twitter Developers](https://developer.twitter.com)
     * `access_token` you can get from: [twitter Developers](https://developer.twitter.com)
     * `access_token_secret` you can get from: [twitter Developers](https://developer.twitter.com)
  
</details>

# Credits

> If consider using this Bot, make sure to credit me!
