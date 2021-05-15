const { PREFIX, WEBHOOK_ID, WEBHOOK_TOKEN } = require("../../config.json");
const { MessageEmbed, WebhookClient } = require("discord.js");
const { User } = require("../../models");

module.exports = async (Root, message) => {

    if (message.type === "USER_PREMIUM_GUILD_SUBSCRIPTION") {
        const ServerBooster = new MessageEmbed()

            .setColor("#8A1200")
            .setTitle(`**${message.author.username}** vient de booster le serveur ! ❤`)
            .setImage("https://media.tenor.co/videos/7c405f4646bbe6def9fc888080263d2a/mp4")
            .setThumbnail("https://media.tenor.co/videos/311f027c8ed6b6a33e8c36fe65e2ecc8/mp4")
            .setTimestamp()
            .setFooter("un utilisateur a boosté le serveur")

        Root.channel.cache.get("820865491018579989").send(ServerBooster);
    }

    if (!message.author.bot && message.channel.type != "dm") {
        if (message.content.startsWith("<@!747161870946795661>")) {
            message.channel.send("Je suis Asteria Bot le bot développé par Aether pour ce serveur si tu veux connaitre mes commande utilise la commande : `$help`");
        } else {
            const dbUser = await Root.getUser(message.member);
            const settings = await Root.getCharacter(message.member)

            if (message.content.startsWith(PREFIX)) {
                const args = message.content.slice(PREFIX.length).split(/ +/);
                const commandName = args.shift().toLowerCase();

                const command = Root.commands.get(commandName) || Root.commands.find(cmd => cmd.help.alias && cmd.help.alias.includes(commandName));
                if (command) command.run(Root, message, args, dbUser);
                else message.channel.send("désolé cette commande n'existe pas regarde la commande `$help` pour connaitre toute les commandes");
            }
            if (settings) {
                    const hook = new WebhookClient(WEBHOOK_ID, WEBHOOK_TOKEN);
                    hook.send("MessageContent", { avatarURL: settings.avatar, username: settings.name })
            }

            const BannedDiscordLink = new RegExp(/https(:)\/\/discord.gg\/[a-zA-Z0-9]+/g);
            const BannedYoutubeLink = new RegExp(/https(:)\/\/www.youtube.com\/watch+/g)
            const BannedYoutubeLink2 = new RegExp(/https(:)\/\/youtu.be\/[a-zA-Z0-9]+/g)

            let YoutubeMatch = message.content.match(BannedYoutubeLink2);
            let YoutubeMatchTwo = message.content.match(BannedYoutubeLink);
            let DiscordMatch = message.content.match(BannedDiscordLink);

            if (YoutubeMatch || YoutubeMatchTwo || DiscordMatch && !message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                message.channel.send(`les liens sont interdit ${message.author.username} on est pas un panneau publicitaire !`).then(m => m.delete());
            }

            if (!dbUser) {
                await Root.createUser({
                    guildID: message.member.guild.id,
                    guildName: message.member.guild.name,
                    userID: message.member.id,
                    username: message.member.user.tag,
                });
            } else {

                if (dbUser) {

                    const Condition = Math.floor((Math.random() * 49) + 1);
                    if (Condition < 30 && Condition > 25) {
                        const max = 20
                        const min = 5
                        let Xpgain = Math.floor((Math.random() * max) + min);

                        Root.updateXp(Root, message.member, Xpgain);

                    }

                    if (dbUser.experience >= dbUser.requis) {

                        XpRest = dbUser.experience - dbUser.requis;
                        require = dbUser.requis * 2
                        levelUp = dbUser.level + 1
                        User.findOneAndUpdate({ userID: message.author.id }, { experience: XpRest, level: levelUp, requis: require }, { new: true }).then(async dat => {
                            const RankUpdate = new MessageEmbed()

                                .setColor("#DAF450")
                                .setTitle(`${message.member.user.username} est passé au niveau supérieur`)
                                .setDescription(`bravo tu es passé au niveau ${dat.level}`)
                                .setThumbnail(message.member.user.displayAvatarURL())
                                .setFooter("un utilisateur est passé au niveau supérieur ")
                                .setTimestamp()
                            await Root.channels.cache.get("781624931787472977").send(RankUpdate)

                            if (dat.level < 65) {
                                if (dat.level.toString().endsWith("5") || dat.level.toString().endsWith("0")) {
                                    let RolePosition = await dbUser.pos;
                                    let oldRole = message.guild.roles.cache.find(r => r.position === RolePosition)
                                    let newRole = message.guild.roles.cache.find(r => r.position === RolePosition + 1);
                                    message.member.roles.remove(oldRole, "level up");
                                    message.member.roles.add(newRole, "level up");
                                    await Root.updatePosition(Root, message.member);

                                    const RoleEmbed = new MessageEmbed()

                                        .setColor("#DC10A1")
                                        .setTitle(`Bravo ${message.author.username} vous avez débloqué un nouveau rôle !`)
                                        .setDescription(`Tu as obtenu l'incroyable rôle: **${newRole}**`)
                                        .setFooter("un utilisateur a eu un nouveau rôle !")
                                        .setTimestamp()

                                    message.channel.send(RoleEmbed)

                                } else return;
                            }
                        })
                    }
                }
            }
        }
    } else if (message.channel.type === 'dm' && !message.author.bot) message.reply("non je ne travaillerais pas -3-")

}