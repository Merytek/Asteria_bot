const { MessageEmbed } = require("discord.js");
const { error } = require("console");
module.exports.run = async (Root, message, args) => {
    let Mention = message.mentions.members.first();
    if (Mention) {
        const Coffee = new MessageEmbed()

            .setColor("#EE12AC")
            .setTitle(`un café est offert à ${Mention.user.username}`)
            .setDescription(`${Mention.user.username} ${message.author.username} t'as offert un café, alors déguste-le pour le remercier^^`)
            .setThumbnail("https://media.giphy.com/media/3ohze2v9DClNU2Cdl6/source.gif")
            .setImage("https://media.giphy.com/media/3jVT4U5bilspG/source.gif")

        message.channel.send(Coffee).catch(error);

    } else {
        if (!Mention) {
        const Coffee = new MessageEmbed()
            .setColor("#DA34F1")
            .setTitle(`${message.author.username} se fait couler un café`)
            .setDescription(`et un petit café pour ce dernier`)
            .setThumbnail("https://media.giphy.com/media/3ohze2v9DClNU2Cdl6/source.gif")
            .setImage("https://media.giphy.com/media/3jVT4U5bilspG/source.gif")

        message.channel.send(Coffee).catch(error);
        
        }
    }
}

module.exports.help = {
    name: "coffee",
    alias: null,
    categorie: "fun",
    description: "permet de se faire un petit café ou d'en offrir un aux membres du serveur !",
    usage: "$cofee [user]",
    permission: null
};
