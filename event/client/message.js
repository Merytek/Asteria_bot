const { PREFIX } = require("../../config.json");
const { error } = require("console");
const { MessageEmbed } = require("discord.js");
const { db } = require("../../models/user");

module.exports = async (Root, message) => {

    if (!message.author.bot) {
        const dbUser = await Root.getUser(message.member);
        //const CharUser = await Root.getCharacter(message.member);

        if (message.content.startsWith(PREFIX) && !message.author.bot) {
            const args = message.content.slice(PREFIX.length).split(/ +/);
            const commandName = args.shift().toLowerCase();

            const command = Root.commands.get(commandName) || Root.commands.find(cmd => cmd.help.alias && cmd.help.alias.includes(commandName));
            command.run(Root, message, args, dbUser);
        }

        const BannedDiscordLink = new RegExp(/https(:)\/\/discord.gg\/[a-zA-Z0-9]+/g);

        if (message.content.match(BannedDiscordLink) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.delete();
            message.channel.send(`les liens vers d'autre serveur sont interdit sur le serveur ${message.author.username} !`)
        } else {
            if (message.channel.type === "dm") {
                return;
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

                        const RankUpdate = new MessageEmbed()

                            .setColor("#DAF450")
                            .setTitle(`${message.member.user.username} est passé au niveau supérieur`)
                            .setDescription(`bravo tu es passé au niveau ${dbUser.level + 1}`)
                            .setThumbnail(message.member.user.displayAvatarURL())
                            .setFooter("un utilisateur est passé au niveau supérieur ")
                            .setTimestamp()
                        Root.channels.cache.get("781624931787472977").send(RankUpdate).catch(error);


                        XpRest = await dbUser.experience - await dbUser.requis;
                        await Root.updateLevel(Root, message.member, XpRest);

                        if (dbUser.level < 65) {
                            if (dbUser.level.toString().endsWith("5") || dbUser.level.toString().endsWith("0")) {
                                let RolePosition = await dbUser.pos;
                                let oldRole = message.guild.roles.cache.find(r => r.position === RolePosition)
                                let newRole = message.guild.roles.cache.find(r => r.position === RolePosition + 1);
                                message.member.roles.remove(oldRole, "level up");
                                message.member.roles.add(newRole, "level up");
                                Root.updatePosition(Root, message.member);
                                
                                const RoleEmbed = new MessageEmbed()

                                    .setColor("#DC10A1")
                                    .setTitle(`Bravo ${message.author.username} vous avez débloqué un nouveau rôle !`)
                                    .setDescription(`Tu as obtenu l'incroyable rôle: **${newRole}**`)
                                    .setFooter("un utilisateur a eu un nouveau rôle !")
                                    .setTimestamp()

                                message.channel.send(RoleEmbed).catch(error);

                                } else return;
                        }
                    }
                }
            }

            if (message.type === "USER_PREMIUM_GUILD_SUBSCRIPTION") {
                const ServerBooster = new MessageEmbed()

                    .setColor("#8A1200")
                    .setTitle(`**${message.author.username}** vient de booster le serveur ! ❤`)
                    .setImage("https://media.tenor.co/videos/7c405f4646bbe6def9fc888080263d2a/mp4")
                    .setThumbnail("https://media.tenor.co/videos/311f027c8ed6b6a33e8c36fe65e2ecc8/mp4")
                    .setTimestamp()
                    .setFooter("un utilisateur a boosté le serveur")

                Root.channel.cache.get("820865491018579989").send(ServerBooster).catch(error);
            }
        }
    }

}