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

le message.js est un de mes objectifs je cherche l'embellir pour le moment sur le github vous le voyez ainsi :

```javascript
const { PREFIX } = require("../../config.json");
const { MessageEmbed } = require("discord.js");

module.exports = async (Root, message) => {
    const dbUser = await Root.getUser(message.member);

    if (message.channel.type === "dm") {
        return Root.emit("directMessage", message);
    }

    if (message.author.bot) return;

    if (!dbUser && !message.author.bot) {
        await Root.createUser({
            guildID: message.member.guild.id,
            guildName: message.member.guild.name,
            userID: message.member.id,
            username: message.member.user.tag,
        });
    }

    if (dbUser.experience >= dbUser.requis) {
                
        XpRest = dbUser.experience - dbUser.requis;

        Root.updateLevel(Root, message.member, XpRest);

        const RankUpdate = new MessageEmbed()

            .setColor("#DAF450")
            .setTitle(`${message.member.user.username} est passé au niveau supérieur`)
            .setDescription(`bravo tu es passé au niveau ${dbUser.level + 1}`)
            .setThumbnail(message.member.user.displayAvatarURL())
            .setFooter("un utilisateur est passé au niveau supérieur ")
            .setTimestamp()
        Root.channels.cache.get("781624931787472977").send({ embed: RankUpdate })

    }

    if (dbUser && !message.author.bot) {
        const Condition = Math.floor((Math.random() * 49) + 1);
        if (Condition < 30 && Condition > 25) {
            const max = 20
            const min = 5
            let Xpgain = Math.floor((Math.random() * max) + min);

            Root.updateXp(Root, message.member, Xpgain);

        }
    }


    if (message.content.startsWith(PREFIX) && !message.author.bot) {
        const args = message.content.slice(PREFIX.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if (!Root.commands.has(command)) return;
        Root.commands.get(command).run(Root, message, args, dbUser);
    }
}
```

Je compte surtout amélioré cette partie : 

```javascript

if (!dbUser && !message.author.bot) {
        await Root.createUser({
            guildID: message.member.guild.id,
            guildName: message.member.guild.name,
            userID: message.member.id,
            username: message.member.user.tag,
        });
    }

    if (dbUser.experience >= dbUser.requis) {
                
        XpRest = dbUser.experience - dbUser.requis;

        Root.updateLevel(Root, message.member, XpRest);

        const RankUpdate = new MessageEmbed()

            .setColor("#DAF450")
            .setTitle(`${message.member.user.username} est passé au niveau supérieur`)
            .setDescription(`bravo tu es passé au niveau ${dbUser.level + 1}`)
            .setThumbnail(message.member.user.displayAvatarURL())
            .setFooter("un utilisateur est passé au niveau supérieur ")
            .setTimestamp()
        Root.channels.cache.get("781624931787472977").send({ embed: RankUpdate })

    }

    if (dbUser && !message.author.bot) {
        const Condition = Math.floor((Math.random() * 49) + 1);
        if (Condition < 30 && Condition > 25) {
            const max = 20
            const min = 5
            let Xpgain = Math.floor((Math.random() * max) + min);

            Root.updateXp(Root, message.member, Xpgain);

        }
    }
    
    ```
  
   qui est basiquement la partie gérant l'autorôle par Xp et j'essaye à tout prix de ne pas mettre une tour de `if`
   
   ### Objectifs
   
   Voici ici les objectifs que j'ai pour le moment si vous avez lu le **README** alors vous les avez déjà vu 
   
- [ ] Créer le système d'économie
- [ ] Créer le système d'Xp
- [ ] Ajouter une commande de classement d'Xp
- [ ] Ajouter un système de webhooks dans les commandes Rp
- [ ] Ajouter la commande Unban
- [ ] Faire un système d'auto-rôle par réaction
- [ ] Ajouter la prise en charge des Alias
- [ ] Faire la commande help
- [ ] Ajouter des Achievements secret
- [ ] embellir le [message.js](https://github.com/Merytek/Asteria_bot/main/tree/event/client/message.js)


### Erreurs

Je modifie légèrement la page pour m'excuser de la petite erreur que j'ai faites je me suis rendu compte il y a peu que je me suis emmêlé les pinceaux entre les version 0.6.0 et 0.7.0 quand j'ai retranscrit les versions j'ai normalement tout corrigé et ça ne se reprdouira plus
