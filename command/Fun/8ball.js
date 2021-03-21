const { error } = require("console");
module.exports.run = (Root, message, args) => {

    const question = args.join(" ");
    const answer = ["oui", "non", "peut-être", "je ne sais pas", "CQFD j'en ai rien à foutre", "absolument", "demande moi plus tard", "mes sources disent que non", "je sais pas je suis pas médecin", "il me semble que oui"];

    if (!question) {
        message.reply("si tu veux une réponse il faudrait poser une question :)")
        .catch(error);
    } else {
        if (question) {
            const SelectedAnswer = answer[(Math.floor(Math.random() * answer.length))];

            message.reply(SelectedAnswer)
            .catch(error);
        }
    }
}

module.exports.help = {
    name: "8ball",
    alias: null,
    categorie: "fun",
    description: "Cette commande permet de connaitre son avenir en questionnant le bot",
    usage: "$8ball <question>",
    permission: null
}