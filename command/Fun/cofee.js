const { MessageEmbed } = require("discord.js");
const { error } = require("console");
module.exports.run = async (Root, message, args) => {
    let Mention = message.mentions.members.first();
    if (Mention) {
        const Cofee = new MessageEmbed()

            .setColor("#EE12AC")
            .setTitle(`un café est offert à ${Mention.user.username}`)
            .setDescription(`${Mention.user.username} ${message.author.username} t'as offert un café alors déguste le en le remerciant^^`)
            .setThumbnail("https://media.giphy.com/media/3ohze2v9DClNU2Cdl6/source.gif")
            .setImage("https://media.giphy.com/media/3jVT4U5bilspG/source.gif")

        message.channel.send({ embed: Cofee }).catch(error);

    } else {
        if (!Mention) {
        const Cofee = new MessageEmbed()
            .setColor("#DA34F1")
            .setTitle(`${message.author.username} se fait couler un café`)
            .setDescription(`et un petit café pour ce dernier`)
            .setThumbnail("https://media.giphy.com/media/3ohze2v9DClNU2Cdl6/source.gif")
            .setImage("https://media.giphy.com/media/3jVT4U5bilspG/source.gif")

        message.channel.send({ embed: Cofee }).catch(error);
        
        }
    }
}

module.exports.help = {
    name: "cofee",
    description: "permet de se faire un petit café ou d'en offrir un aux membre du serveur !",
};