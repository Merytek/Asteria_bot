module.exports.run = (Root, message, args) => {
    const number = parseInt(args[0]);

    if (number) {
        if (typeof (number) != NaN) {
            if (number > 0) {
                let result = Math.floor((Math.random() * number) + 1);

                message.reply(`tu as tiré un dé à **${number} face(s)** ! \nrésultat: **${result} !**`)
            } else message.channel.send("Tu dois entrer un nombre supérieur à 0 pour utiliser cette commande")
        } else message.channel.send("Tu dois donner donner un nombre pour utiliser cette commande")
    } else message.channel.send("Tu dois entrer un nombre pour utiliser cette commande")
}


module.exports.help = {
    name: 'roll',
    alias: null,
    categorie: "rp",
    description: 'Renvoie un nombre aléatoire dans un lancé de dés avec un nombre maximum choisi par le joueur',
    usage: "$roll <int>",
    permission: null
};
