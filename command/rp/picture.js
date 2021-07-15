const { isUri } = require("valid-url");
module.exports.run = async (Root, message, args) => {

    const account = await Root.getCharacter(message.member);

    let Names = args[0]
    let URL = args[1];

    const settings = await Root.getCharacterByName(message.member, Names);

    if (account) {
        if (settings) {
            if (settings.name) {
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
            } else message.channel.send(`Tu n'as enregistré aucun personnage sous le nom de **${Names}**`)
        } else message.channel.send("Entre le nom d'un de tes personnages pour t'en servir")
        
        
    } else message.channel.send("Tu n'as enregistré aucun personnage utilise la commande `$register` pour cela")


}


module.exports.help = {
    name: 'picture',
    alias: ["pic"],
    categorie: "rp",
    description: 'permet d\'ajouter une image sur votre personnage pour avoir autre chose que la magnifique Miku en tant qu\'image pour ton personnage',
    usage: "$picture <Name> <URL | MessageAttachment>" || "$pic <Name> <URL | MessageAttachment>",
    permission: null
};