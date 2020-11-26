module.exports.run = (Root, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS", true))
        return message.reply("oulà t'as fumé t'as pas les perms et t'as cru t'allais ban quelqu'un");
    let Member = message.mentions.members.first();
    if (!Member.bannable)
        return message.reply(`je ne peux pas ban ${Member.user.username} c'est mon papa :)`);
    let Reason = args.slice(1).join(" ");
    if (!Reason) Reason = `${Member.user.username} a commis trop d'infraction`;

    Member.ban({ days: 7, reason: Reason })
        .catch(error => message.channel.send(`désolé ${message.author} je ne peux pas ban ${Member.user.username} car ${error}`));
    message.channel.send(`le marteau de la justice c'est abbatu ${Member.user.tag} a été banni par ${message.author} pour: ${Reason}`)
}

module.exports.help = {
    name: 'ban',
    description: 'donne la possibilité aux modérateur de bannir les plus turbulent',
};