module.exports.run = (Root, message, args) => {
    const num = parseInt(args[0]);
    if (num) {
        let result = Math.floor((Math.random() * num) + 1);
        message.reply(`tu as tiré un dé à **${num} face(s)** ! \nrésultat: **${result} !**`)
    } else message.channel.send("Tu dois entrer un nombre pour utiliser cette commande")
}

module.exports.help = {
    name: 'roll',
    alias: null,
    categorie: "rp",
    description: 'Renvoie un nombre aléatoire dans un lancé de dés avec un nombre maximum choisi par le joueur',
    usage: "$roll <int> [{+|-}int]",
    permission: null
};
