const { isUri } = require("valid-url");
module.exports.run = async (Root, message, args) => {

    let Names = args[0]
    let URL = args[1];

    if (!URL) {
        message.attachments.forEach(async attachment => {
            const Attachment = attachment.proxyURL;
            if (Attachment) {
                await Root.updateAvatar(message.member, Names, Attachment);
                message.channel.send(`l'avatar de "**${Names}**" a été modifié avec succès`);
            } else {
                if (!Attachment) message.reply("tu n'as pas lié d'image à ce message :O");
            }
        });
    } else {
        if (isUri(URL)) {
            await Root.updateAvatar(message.member, Names, URL);
            message.channel.send(`l'avatar de "**${Names}**" a été modifié avec succès`);
        } else {
            message.reply("hmmm...l'Url donné n'est pas correct")
        }
    }

}


module.exports.help = {
    name: 'picture',
    alias: ["pic"],
    categorie: "rp",
    description: 'permet d\'ajouter une image sur votre personnage pour avoir autre chose que la magnifique Miku en tant qu\'image pour ton personnage',
    usage: "$picture <Name> <URL | MessageAttachment>" || "$pic <Name> <URL | MessageAttachment>",
    permission: null
};