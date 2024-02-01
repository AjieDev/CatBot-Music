require('dotenv').config()
module.exports = {
  token: process.env.TOKEN,
  prefix: process.env.PREFIX || "cbm!",
  ownerID: process.env.OWNERID,
  SpotifyID: process.env.SPOTIFYID,
  SpotifySecret: process.env.SPOTIFYSECRET,
  mongourl: process.env.MONGO_URI,
  embedColor: process.env.COlOR || "#303236",
  logs: process.env.LOGS,
  guildId: process.env.GUILD_ID,
  clientId: process.env.CLIENT_ID,

  nodes: 
    {

    host: process.env.LHOST,
    port: 540,
    password: process.env.LPASS,
    id: "AjieDev Co. Hosting Limited",
    retryDelay: 30000,
    secure: false

  }

}

