# Asteria bot
### Description du Bot

Ce bot a été créé pour **mon serveur**, qui est lui aussi en cours de build. Il possède plusieurs commandes, de la simple commande "fun" à la commande "Admin". Il est développé en Full JS via l'API [Discord.js](https://discord.js.org/#/) j'essaye d'ajouter des commandes régulièrement comme vous l'avez remarqué ou non. Le bot est sous la license ***MIT*** de ce fait vous avez le droit de vous resservir des commandes des fichiers etc tant que vous me citez dans votre README.

### Description des commandes

**Admin**:

voici la liste et l'explication des commandes [Admin](https://github.com/Merytek/Asteria_bot/tree/main/command/Admin)

_liste des commandes_:

- [eval](https://github.com/Merytek/Asteria_bot/blob/main/command/Admin/eval.js)

_explication des commandes_:

eval: cette commande permet de simuler du JS depuis le serveur, elle ne peut être utilisé que par moi, elle me permet par exemple de tester les events. Elle s'utilise comme ceci => `$eval <Client.emit("eventName", arguments)>`

**Fun**:

voici la liste et l'explication des commandes [Fun](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun)

_liste des commandes_:

- [8ball](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/8ball.js)
- [avatar](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/avatar.js)
- [cofee](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/cofee.js)
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

_explication des commandes_:

**8ball**: cette commande est aléatoire, elle permet d'avoir une réponse à une question fermée, elle est utilisable par tout le monde => `$8ball <question>`

**avatar**: Une simple, permet de voir la pp de n'importe quel utilisateur sur le serveur, s'il est mentionné, sinon ce sera la pp de l'utilisateur de la commande qui sera renvoyée. => `$avatar [user]`

**coffee**: Assez random et permet de donner un café à un utilisateur **mentionné**. S'il n'y a pas de mention, l'utilisateur ayant lancé la commande aura un messsage personnalisé disant qu'il se sert un café. => `$coffee [user]`

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

**Misc**

voici la liste et l'explication des commandes [Misc](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc)

_liste des commandes_:

- [ping](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc/ping.js)
- [source](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc/source.js)
- [suggestion](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc/suggestion.js)

_explication des commandes_:

**ping**: permet d'obtenir les latences entre l'utilisateur et le bot. => `$ping`

**source**: redirige vers le repo du bot.  => `$source`

**suggestion**: permet de faire une suggestion au serveur. Faisable uniquement dans un certain salon puis est envoyée dans un autre plus précis => `$suggest <suggestion>`

**Mod**

voici la liste et l'explication des commandes [Mod](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod)

_liste des commandes_:

- [ban](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/ban.js)
- [kick](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/kick.js)
- [mute](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/mute.js)
- [purge](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/purge.js)
- [unmute](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/unmute.js)

_explication des commandes_:

**ban**: Bannir un utilisateur du serveur avec ou sans raison, s'il n'y en a pas de donnée, une raison "par défaut" est utilisée, pareil pour les autres. => `$ban <user> [reason]`

**kick**: Kick un utilisateur du serveur => `$kick <user> [reason]`

**mute**: Mute un utilisateur sur le serveur en lui ajoutant un rôle **muted** => `$mute <user> [reason]`

**purge**: Clear les messages d'un salon, capable de supprimer entre 2 et 100 messages d'un coup => `$purge <int>`

**unmute**: Unmute un utilisateur en lui retirant le rôle **muted** et ne nécessite pas de raison pour être utilisée. => `$unmute <user>`

**rp**

voici la liste et l'explication des commandes [rp](https://github.com/Merytek/Asteria_bot/tree/main/command/rp.js)

_liste des commandes_:

- [letter](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/letter.js)
- [roll](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/roll.js)

_explication des commandes_:

**letter**: Envoye une lettre secrète à un utilisateur pour le côté Rp. Elle peut être ignorée ou non, car reçu en Mp du bot => `$letter <user> <message>`

**roll**: Lancé de dés => `$roll <int>`

**Xp**

voici la liste et l'explication des commandes [Xp](https://github.com/Merytek/Asteria_bot/tree/main/command/Xp)

_liste des commandes_:

- [rank](https://github.com/Merytek/Asteria_bot/tree/main/command/Xp/rank.js)

_explication des commandes_:

**rank**: Permet de visionner son Xp ou celui de quelqu'un d'autre s'il est mentionné => `$rank <user>`

### Dépendances Utilisé

- discord.js
- mongoose
- fs 
- snekfetch 
- ytdl-core 
- humanize-duration
- moment

### Autres Informations 

**ancienne version**:

- [v.0.1.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.0.1.0)
- [v.0.2.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.2.0)
- [v.0.3.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.3.0)
- [v.0.4.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.4.0)
- [v.0.5.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.5.0)

**version actuelle**:

version actuelle du projet: [v.0.6.0]

***projet:***

- [ ] Créer le système d'économie
- [x] Créer le système d'Xp
- [ ] Ajouter une commande de classement d'Xp
- [ ] Ajouter un système de webhooks dans les commandes Rp
- [ ] Ajouter la commande Unban
- [ ] Faire un système d'auto-rôle par réaction
- [x] Ajouter la prise en charge des Alias
- [ ] Faire la commande help
