const { get } = require("snekfetch");
const { error } = require("console");
const { MessageEmbed } = require("discord.js");
module.exports.run = async (Root, message, args) => {
    let Members = message.mentions.members.first();
    const { body } = await get("https://api.tenor.com/v1/random?q=shoot-anime&key=6BCDWZTZ8A07&limit=1");
    let gif = body["results"][0]["media"][0]["gif"]["url"];

    if (Members && Members.user.id !== message.author.id) {
        const ShootEmbed = new MessageEmbed()

            .setColor("#009A1C")
            .setTitle(`${message.author.username} tire sur ${Members.user.username}`)
            .setImage(gif)

        message.channel.send(ShootEmbed).catch(error)
    } else {
        if (!Members || Members.user.id === message.author.id) {
            const ShootEmbed = new MessageEmbed()

                .setColor("#009A1C")
                .setTitle(`${message.author.username} se suicide`)
                .setImage(gif)

            message.channel.send(ShootEmbed).catch(error)
        }
    }

    
}

module.exports.help = {
    name: 'shoot',
    alias: null,
    categorie: "fun",
    description: 'permet de tirer sur des gens sur le serveur !',
    usage: "$shoot [user]",
    permission: null
};