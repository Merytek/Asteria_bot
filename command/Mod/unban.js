module.exports.run = (Root, message, args) => {
    if (!message.member.hasPermission("MANAGE_MEMBER", true)) {
        message.reply("hep, hep, hep tu comptais faire quoi là ?");
    } else {
        let ID = args[0];
        if (ID) {
            message.guild.fetchBans().then(b => {
                if (b.size == 0) return;
                let bannedUser = b.find(ban => ban.user.id == ID)
                if (!bannedUser) message.channel.send("Cette personne n'a pas été banni vérifie bien l'ID");
                else message.guild.members.unban(bannedUser.user).then(ub => {
                    message.channel.send(`${ub.username} a été unban avec succès UwU`);
                }).catch(console.error);
            }).catch(console.error);
        }
    }
}

module.exports.help = {
    name: 'unban',
    alias: null,
    categorie: "mod",
    description: 'Permet d\'Unban les utilisateurs banni',
    usage: "$unban <user>",
    permission: "MANAGE_MEMBER"
};