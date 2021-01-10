const { error } = require("console");

module.exports.run = (Root, message, args) => {

    const loveRate = Math.floor((Math.random() * 99) + 1);

    let FirstPeople = args[0];
    let SecondPeople = args[1];

    const messageTemplate = `le taux d'amour entre ${FirstPeople} et ${SecondPeople} est de ${loveRate}%`;

    if (loveRate >= 1 && loveRate < 20) {
        message.channel.send(`${messageTemplate} C'est bien faible il faudrait essayer de trouver quelqu'un d'autre`)
        .catch(error)
    }

    if (loveRate >= 20 && loveRate < 30) {
        message.channel.send(`${messageTemplate} C'est mieux mais ça reste un amour fragile`)
        .catch(error)
    }

    if (loveRate >= 30 && loveRate < 50) {
        message.channel.send(`${messageTemplate} C'est un jeune amour que voilà il faut faire attention à ne pas étouffer le feu de la passion ^^`)
        .catch(error)
    }

    if (loveRate >= 50 && loveRate < 60) {
        message.channel.send(`${messageTemplate} C'est un amour sincère qui va durer on l'espère`)
        .catch(error)
    }

    if (loveRate >= 60 && loveRate < 80) {
        message.channel.send(`${messageTemplate} Voilà un amour pur qui en fera trembler les dieux`)
        .catch(error)
    }

    if (loveRate >= 80 && loveRate < 100) {
        message.channel.send(`${messageTemplate} l'amour, l'Amour avec un grand A l'amour parfait qui sera unique et toujours puissant comme au premier jour`)
        .catch(error)
    }
    

}

module.exports.help = {
    name: "lovecalc",
    alias: "lc",
    description: "permet de calculer l'amour entre 2 personnes",
    usage: "$lovecalc <first_args> <second_args>" || "$lc <first_args> <second_args>",
    permission: null
}