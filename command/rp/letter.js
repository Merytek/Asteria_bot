const { error } = require("console");
module.exports.run = (Root, message, args) => {
    let Member = message.mentions.members.first();
    const Message = args.slice(1).join(" ");
    if (Member && Message) {
        message.delete();
        Member.send(`> *__${Member.username} tu viens de recevoir un message de la part de ${message.author.username} par chance le pigeon est arrivé entier__*\n\n\n ||${Message}||`)
            .catch(error)
    } else {
        if (!Member || !Message) {
            message.reply("pour utiliser la commande correctement tu dois mentionner un utilisateur et ajouter un message à envoyer")
            .catch(error)
        }
    }
}

module.exports.help = {
    name: 'letter',
    alias: null,
    categorie: "rp",
    description: 'Envoie une lettre secrète à un membre du serveur !',
    usage: "$letter <user> <message>",
    permission: null
};