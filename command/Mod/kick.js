const { error } = require("console");
module.exports.run = (Root, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS', true))
        return message.reply("gros t'as trop cru que j'allais t'écoucher...clochard !")
        .catch(error);

    let Member = message.mentions.members.first();
    if (!Member.kickable)
        return mesage.reply(`je ne peux pas Kick ${Member.user.username} c'est mon papa :)`)
        .catch(error);;
    let reason = args.slice(1).join(" ");
    if (!reason) reason = `${Member.user.username} a été Kick à cause de son trop gros nombre d'infraction`;

    Member.kick(reason)
        .catch(error => message.channel.send(`désolé ${message.author} je ne peux pas kick ${Member.user.username} car ${error}`));
    message.reply(`${Member.user.username} a été kick par ${message.author} pour **${reason}**`)
    .catch(error);;
}

module.exports.help = {
    name: 'kick',
    alias: null,
    description: 'fait en sorte que les modos puissent kick les éléments perturbateurs',
    usage: "$kick <user> [reason]"?
    permission: "KICK_MEMBERS"
};