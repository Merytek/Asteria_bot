const { error } = require("console");
const { get } = require('snekfetch');
const { MessageEmbed } = require("discord.js");
module.exports.run = async (Root, message, args) => {
    let search = args[0];
    if (args) {

        const { body } = await get(`https://images-api.nasa.gov/search?q=${search}`);
        let DataNumber = parseInt(body["collection"]["metadata"]["total_hits"]);

        if (DataNumber > 0) {

            const title = body["collection"]["items"][0]["data"][0]["title"];
            const description = body["collection"]["items"][0]["data"][0]["description"];
            const Date = body["collection"]["items"][0]["data"][0]["date_created"];
            const image = body["collection"]["items"][0]["links"][0]["href"];
            const author = body["collection"]["items"][0]["data"][0]["photographer"];
            const location = body["collection"]["items"][0]["data"][0]["location"];

            const spaceEmbed = new MessageEmbed()

                .setColor('#DA340A')
                .setTitle(title)
                .setDescription(description)
                .addField("localisation", location)
                .setImage(image)
                .setFooter(`date: ${Date} | auteur: ${author}`)

            message.channel.send(spaceEmbed)
                .catch(error);
        } else {
            if (DataNumber <= 0) {
                message.channel.send("erreur aucun résultat trouvé pour votre recherche").catch(error);
            }
        }
    } else {
        if (!args) {
            message.reply("ajoutez un argument de recherche")
        }
    }

}

module.exports.help = {
    name: "spacesearch",
    alias: ["spsr"],
    categorie: "fun",
    description: "une commande pour obtenir des informations sur l'astronomie",
    usage: "$spacesearch <keyword>" || "$spsr <keyword>",
    permission: null
}