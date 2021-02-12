const {error} = require("console");

module.exports.run = (Root, message, args) => {
    const jokeList = [
        "qu'est-ce qu'une dent dans un verre d'eau ? ||une solution molaire||",
        "(2AB)/(2π.R²)",
        "qu'est-ce qu'une douche sans eau ? ||une duche||",
        "qu'est-ce qu'un ours polaire qui change de coordonnées ? ||un ours cartésien||",
        "est-ce que tu connais le fruit préféré de Donald Trump ? ||c'est les mûrs||",
        "un combat entre Daniel Balavoine et Marc Lavoine ! Qui gagne ? ||Daniel car il bat L'avoine||",
        "un jour en 1786, une fille a fait passer une chain mail avec écrit : je suis Chuck Norris. Chuck Norris l'a reçu, la fille en question est devenue aveugle, et il a fallut plus de 2 siècles pour pouvoir réparer internet",
        "c'est l'histoire d'un électron qui se fait arrêter par la police, le gendarme dit à l'électron:\nsaviez vous que vous rouliez à 150km/h ?\nl'électron répond alors:\n-Ah bah bravo je suis perdu maintenant !",
        "l'entropie n'est plus ce que c'était...",
        "Pourquoi Mickey Mouse ? ||parce que Mario Bros||",
        "C'est l'histoire d'un mec qui entre dans un bar et il dit:\n-Salut c'est moi\nen fait c'était pas lui...",
        "Un jour Dieu demanda à Aya Naka de mourir\n et Aya Nakamoura",
        "Statistiquement 1 personne sur 3 dans un couple est infidèle\n je vais devoir enquêter sur ma femme et ma maîtresse"

    ];

    let choosenJoke = jokeList[(Math.floor(Math.random() * jokeList.length))];

    message.channel.send(choosenJoke)
    .catch(error);

}

module.exports.help = {
    name: 'joke',
    alias: null,
    description: 'Renvoie une blague qui te feras mourir de rire !...ou pas...plutôt pas en fait',
    usage: "$joke",
    permission: null
};
