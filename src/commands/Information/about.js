const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See about CatBot Music (Plus)",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=544655015377&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("YouTube Channel")
    .setStyle("LINK")
  
 .setURL("https://youtube.com/channel/UC3ny95ZTlnkh2lqua3uIgiQ"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://dsc.gg/ajidevserver")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('CatBot Music Plus', 'https://media.discordapp.net/attachments/979112157729943632/988026068361437214/catbot-official.jpg')
            .setThumbnail('https://media.discordapp.net/attachments/979112157729943632/988026068361437214/catbot-official.jpg')
            .setColor('#303236')
            .addField('Creator', '[AjieDev](https://github.com/ajideveloper-345/CB-Music-Projects)', true)
            .addField('Made Using', 'Node.js', '**Visual Code Studio**', true)
            .addField('Hosting Server', '**Google Cloud Platform**', true)
            .addField('\u200b',
                `CatBot Music is FREE to use , no NEED any subcription , Made with Love :)`
            )
        return message.reply({embeds: [mainPage], components: [row]});
    }
}