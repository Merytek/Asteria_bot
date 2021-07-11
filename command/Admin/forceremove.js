module.exports.run = async (Root, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR", true)) {
        message.channel.send("De nos jour les jeunes se croient tout permis >:( C'EST UN SCANDAL !")
    } else {
        let Member = message.mentions.members.first();
        let selectedCharacter = args[1];
        const account = await Root.getCharacter(Member.user);
        if (Member) {
            if (account) {
                if (selectedCharacter) {
                    const settings = await Root.getCharacterByName(Member.user, selectedCharacter);
                    if (settings !== undefined) {
                        Root.removeChar(Member.user, selectedCharacter);
                        message.channel.send(`Le personnage de ${Member.user.username} a été supprimé avec succès`);
                    } else {
                        const getID = await Root.getObjectId(Member.user, selectedCharacter);
                        if (getID._id) {
                            Root.removeChar(Member.user, getID.name);
                            message.channel.send(`Le personnage de ${Member.user.username} a été supprimé avec succès`);
                        }
                    }
                } else message.channel.send("Il faut spécifier un Nom de personnage ou un ID de model de la DB")
            }
        } else message.channel.send("Il faut mentionner un utilisateur");
    }
}


module.exports.help = {
    name: 'forceremove',
    alias: ["frm", "fdel"],
    categorie: "admin",
    description: 'Permet aux admin de pouvoir supprimer de force le personnage d\'un rôliste s\'il est jugé innaproprié',
    usage: "$forceremove <user> <character_name | objectID>",
    permission: "ADMINISTRATOR"
};
