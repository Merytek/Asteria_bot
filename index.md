## Bienvenue sur la page Web de mon Bot

Vous pouvez retrouver le repo juste là: [Je suis le repo ^^](https://github.com/Merytek/Asteria_bot) pour voir les nouvelles fonctionnalitées du bot !

Mon bot est taillé pour fonctionner sur mon propre **serveur** Discord cependant vous pouvez l'utiliser pour le votre il suffit de créer une DB sur [mongoDB](https://www.mongodb.com/) de modifier le fichier [config](https://github.com/Merytek/Asteria_bot/main/tree/config.json) et plusieurs petit détail dans certaines commandes notamment celles qui envoient une réponse dans un certain channel 

### Ce que fait le bot ?

Voilà une question intéressante ! Ce bot a plusieurs fonctionnalité: 

### Admin

Dans ce module on retrouve les commandes spécifique aux Admin seul **eux** peuvent les utiliser pour le moment une commande existe c'est la commande `eval` qui permet d'émuler une commande JS sur le serveur je compte cependant ajouter plusieurs commande spécifique comme par exemple une commande de Giveaways ou autre j'avoue que ce module n'est pas ma prioritée donc je n'y ai pas encore vraiment réfléchit 

### Fun

Ce module est l'un des plus récents à avoir eu une update il contient toute les commandes pour animer le serveur et faire en sorte que les membres aient quelque chose à faire avec le bot certaines commande comme la commande [say]("https://github.com/Merytek/Asteria_bot/main/tree/command/Fun/say.js) est des plus basique cependant il existe des commandes plus complexe comme les commandes qui intéragissent avec l'API de **Tenor** même si elles n'ont pas un niveau de programmation incroyable elles permettent une intéraction complète entre les utilisateurs 

### Misc 

Ce module va bientôt recevoir une jolie Mise à jour ! pour l'instant il n'a que 3 commandes mineurs une commande de suggestion, une commande basique de ping et une dernière qui rammène vers le repo github mais je compte en ajouter plus comme dit plus tôt

### Mod

ce module est l'un des premiers à avoir eu une mise à jour important même s'il n'y a pas encore tout (voir les objectifs plus bas) les permissions d'utilisation de la commande sont géré via les permissions des rôles faites donc attention aux permission si vous utilisez mes commandes comme template 

### Rp

celui que je repousse le plus bien qu'un rôliste depuis de longues années j'ai un peu la flemme de m'attaque à ce module qui me demandera d'intérragir de manière répété à la DB ce qui risque d'être très complexe les 2 seules commandes à l'heure actuelle sont des commandes de tire de dés **roll** et une commande d'envoie de lettre secrète : **letter**

### Xp

encore un module que je laisse de côté pour l'instant surtout parce que je n'ai aucune idée de quoi rajouter à part le système de classement mais je compte le faire plus tard n'étant pas du tout prioritaire

### message.js

le message.js est un de mes objectifs j'ai réussi à l'améliorer pour qu'il soit plus conmpréhensible :

```javascript
const { PREFIX } = require("../../config.json");
const { error } = require("console");
const { MessageEmbed } = require("discord.js");

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
        const BannedYoutubeLink = new RegExp(/https(:)\/\/www.youtube.com\/watch\?v=[a-zA-Z0-9]+/g);

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


                    XpRest = dbUser.experience - dbUser.requis;
                    await Root.updateLevel(Root, message.member, XpRest);

                    if (dbUser.level < 65) {
                        if (dbUser.level.toString().endsWith("5") || dbUser.level.toString().endsWith("0")) {
                            //dernière couche de vérification + ajout du nouveau rôle et suppression de l'ancien
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
```

Je compte galère seulement encore avec la partie d'autorôle part l'xp j'essaye à tout prix de ne pas mettre une tour de `if`
   
### Objectifs
   
- Voici ici les objectifs que j'ai pour le moment si vous avez lu le **README** alors vous les avez déjà vu 
   
1. [ ] Créer le système d'économie
2. [ ] Créer le système d'Xp
3. [ ] Ajouter une commande de classement d'Xp
4. [ ] Ajouter un système de webhooks dans les commandes Rp
5. [ ] Ajouter la commande Unban
6. [ ] Faire un système d'auto-rôle par réaction
7. [x] Ajouter la prise en charge des Alias
8. [x] Faire la commande help
9. [ ] Ajouter des Achievements secret
10. [x] embellir le [message.js](https://github.com/Merytek/Asteria_bot/main/tree/event/client/message.js)


### FIX ! 

Petits fix de la page je me suis rendu compte qu'il y avait un bug avec les code blocks qui sont maintenant réglé 
