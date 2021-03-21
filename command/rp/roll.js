const { error } = require("console");
module.exports.run = (Root, message, args) => {
    const number = args.join('');

    let result = Math.floor((Math.random() * number) + 1);

    message.reply(`tu as tiré ${result}`).catch(error);
}


module.exports.help = {
    name: 'roll',
    alias: null,
    categorie: "rp",
    description: 'Renvoie un nombre aléatoire dans un lancé de dés avec un nombre maximum choisi par le joueur',
    usage: "$roll <int>",
    permission: null
};
