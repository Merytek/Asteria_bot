# Asteria bot

![js](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

### Description du Bot

Ce bot a été créé pour **mon serveur**, qui est lui aussi en cours de build. Il possède plusieurs commandes, de la simple commande "fun" à la commande "Admin". Il est développé en Full JS via l'API [Discord.js](https://discord.js.org/#/) j'essaye d'ajouter des commandes régulièrement comme vous l'avez remarqué ou non. Le bot est sous la licence ***MIT***, de ce fait vous avez le droit de vous resservir des commandes des fichiers etc tant que vous me citez dans votre README.

### Description des commandes

#### Admin:

Voici la liste et l'explication des commandes [Admin](https://github.com/Merytek/Asteria_bot/tree/main/command/Admin)

_Liste des commandes_:

- [eval](https://github.com/Merytek/Asteria_bot/blob/main/command/Admin/eval.js)

_Explication des commandes_:

eval: Cette commande permet de simuler du JS depuis le serveur, elle ne peut être utilisée que par moi, elle me permet par exemple de tester les events. Elle s'utilise comme ceci => `$eval <Client.emit("eventName", arguments)>`

#### Fun:

Voici la liste et l'explication des commandes [Fun](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun)

_Liste des commandes_:

- [8ball](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/8ball.js)
- [avatar](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/avatar.js)
- [coffee](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/coffee.js)
- [dance](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/dance.js)
- [hug](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/hug.js)
- [iss](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/iss.js)
- [joke](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/joke.js)
- [kiss](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/kiss.js)
- [lovecalc](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/lovecalc.js)
- [punch](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/punch.js)
- [say](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/say.js)
- [shoot](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/shoot.js)
- [slap](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/slap.js)
- [spacesearch](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/spacesearch.js)
- [wasted](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/wasted.js)

_Explication des commandes_:

**8ball**: Cette commande est aléatoire, elle permet d'avoir une réponse à une question fermée et est utilisable par tout le monde => `$8ball <question>`

**avatar**: Permet de voir la pp de n'importe quel utilisateur sur le serveur s'il est mentionné, sinon ce sera la pp de l'utilisateur de la commande qui sera renvoyée. => `$avatar [user]`

**coffee**: Permet de donner un café à un utilisateur **mentionné**. S'il n'y a pas de mention, l'utilisateur ayant lancé la commande aura un messsage personnalisé disant qu'il se sert un café. => `$coffee [user]`

**dance**: Envoie un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup). Si un utilisateur est mentionné, il y aura un certain message, qui sera changé si vous vous mentionnez vous-même ou que vous ne mettez pas de mention. Cette réaction s'effectuera également avec les autres commandes citées ci-dessous. => `$dance [user]`

**hug**: Envoie un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) => `$hug [user]`

**iss**: Se connecte à une [API](https://wheretheiss.at/w/developer) et renvoie les informations de position de l'ISS en temps réel. => `$iss`

**joke**: Envoie une blague random venant d'un array. Elles sont plus ou moins drôles, je ne suis pas un expert dans le milieu du comique. => `$joke`

**kiss**: Envoie un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup). => `$kiss [user]`

**lovecalc**: Calcule le taux d'amour entre 2 personnes. Il existe des bornes dans le programme, si vous tombez dedans, vous avez un certain message. => `$lovecalc <first_args> <second_args>`

**punch**: Envoie un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) => `$punch [user]`

**say**: Une basique qui fera que le bot répétera votre message en le supprimant. => `$say <message>`

**shoot**: Envoie un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) => `$shoot [user]`

**slap**: Envoie un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) => `$slap [user]`

**spacesearch**: Va chercher sur l'API de la [NASA](https://api.nasa.gov/) des articles avec le Keyword demandé, ensuite cet article est renvoyé dans le serveur sous la forme d'un Embed. => `$spacesearch <keyword>`

**wasted**: Envoie un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) => `$wasted [user]`

#### Misc:

Voici la liste et l'explication des commandes [Misc](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc)

_Liste des commandes_:

- [help](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc/help.js)
- [ping](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc/ping.js)
- [source](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc/source.js)
- [suggestion](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc/suggestion.js)

_Explication des commandes_:

**help**: cette commande permet d'obtenir la liste des commandes du bot et si un argument est entré la commande en question sera elle seul listé => `$help [command_name]`

**ping**: Permet d'obtenir les latences entre l'utilisateur et le bot. => `$ping`

**source**: Redirige vers le repo du bot.  => `$source`

**suggestion**: Permet de faire une suggestion au serveur. Faisable uniquement dans un certain salon puis envoyée dans un autre plus précis => `$suggest <suggestion>`

#### Mod:

Voici la liste et l'explication des commandes [Mod](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod)

_Liste des commandes_:

- [ban](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/ban.js)
- [kick](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/kick.js)
- [mute](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/mute.js)
- [purge](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/purge.js)
- [unmute](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/unmute.js)

_Explication des commandes_:

**ban**: Bannir un utilisateur du serveur avec ou sans raison, s'il n'y en a pas de donnée, une raison "par défaut" est utilisée, pareil pour les autres. => `$ban <user> [reason]`

**kick**: Kick un utilisateur du serveur => `$kick <user> [reason]`

**mute**: Mute un utilisateur sur le serveur en lui ajoutant un rôle **muted** => `$mute <user> [reason]`

**purge**: Clear les messages d'un salon, capable de supprimer entre 2 et 100 messages d'un coup => `$purge <int>`

**unmute**: Unmute un utilisateur en lui retirant le rôle **muted** et ne nécessite pas de raison pour être utilisée. => `$unmute <user>`

#### Rp:

Voici la liste et l'explication des commandes [rp](https://github.com/Merytek/Asteria_bot/tree/main/command/rp.js)

_Liste des commandes_:

- [letter](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/letter.js)
- [liste](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/liste.js)
- [picture](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/picture.js)
- [register](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/register.js)
- [remove](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/remove.js)
- [roll](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/roll.js)
- [settings](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/settings.js)

_Explication des commandes_:

**letter**: Envoye une lettre secrète à un utilisateur pour le côté Rp. Elle peut être ignorée ou non, car reçu en Mp du bot => `$letter <user> <message>`

**liste**: Permet de lister les personnages qu'un utilisateur a enregistré dans la DB => `$liste` 

**picture**: Change l'image du personnage enregistré dans la DB => `$picture <Name> <URL | MessageAttachment>` 

**register**: Permet d'enregistrer un personnage dans la DB qui pourra être utilisé plus tard => `$register <name> <bracket::text>`

**remove**: Permet de supprimer un personnage enregistré de la DB => `$remove <character_name>` 

**roll**: Lancé de dés => `$roll <int>`

**settings**: Cette commande sert à modifier les informations d'un personnage enregistré par l'utilisateur => `$settings <"bracket" | "name"> <character_name> <new character_bracket | new character_name>`

#### Xp:

Voici la liste et l'explication des commandes [Xp](https://github.com/Merytek/Asteria_bot/tree/main/command/Xp)

_Liste des commandes_:

- [rank](https://github.com/Merytek/Asteria_bot/tree/main/command/Xp/rank.js)

_Explication des commandes_:

**rank**: Permet de visionner son Xp ou celui de quelqu'un d'autre s'il est mentionné => `$rank <user>`

### Dépendances Utilisé

Nom de la dépendance | version | utilisé
---------------------|---------|--------
Canvas | 2.8.0 | ❌
Discord-buttons | 3.1.1 | ❌
Discord.js | 12.5.3 | ✔️
Discord.js-pagination | 1.0.3 | ❌
fs | 0.0.1-security | ✔️
humanize-duration | 3.24.0 | ❌
moment | 2.29.1 | ✔️
mongodb | 3.6.5 | ✔️
mongoose | 5.12.1 | ✔️
ping-wrapper | 0.0.3 | ❌
snekfetch | 4.0.4 | ✔️
valid-url | 1..9 | ✔️
xml2json | 0.12.0 | ❌


### Autres Informations 

**Ancienne version**:

- [v.0.1.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.0.1.0)
- [v.0.2.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.2.0)
- [v.0.3.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.3.0)
- [v.0.4.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.4.0)
- [v.0.5.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.5.0)
- [v.0.6.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.6.0)
- [v.0.7.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.7.0)
- [v.0.8.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.8.0)
- [v.0.9.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.9.0)
- [v.1.0.0](https://github.com/Merytek/Asteria_bot/releases/tag/v1.0.0)
- [v.1.1.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.1.1.0)

**Version actuelle**:

Version actuelle du projet: **v.1.2.0**

### Projet:

- [ ] Créer le système d'économie
- [x] Créer le système d'Xp
- [ ] Ajouter une commande de classement d'Xp
- [x] Ajouter un système de webhooks dans les commandes Rp
- [ ] Ajouter la commande Unban
- [ ] Faire un système d'auto-rôle par réaction
- [x] Ajouter la prise en charge **complète** des Alias
- [x] Faire la commande help
- [ ] Ajouter des Achievements secret
- [x] Embellir le [message.js](https://github.com/Merytek/Asteria_bot/tree/main/event/client/message.js)
- [ ] Ajouter une commande de Giveaway
- [ ] Ajouter des commandes pour ajouter / retirer de l'Xp
