# Asteria bot
### Description du Bot

Ce bot a été créé pour **mon serveur** qui est lui aussi en cours de build il possède plusieurs commande de la simple commande "fun" à la commande "Admin" il est développé en Full JS via l'API [Discord.js](https://discord.js.org/#/) j'essaye d'ajouter des commandes régulièrement comme vous l'avez remarqué ou non le bot est sous la license ***MIT*** de ce fait vous avez le droit de vous resservir des commandes des fichiers etc tant que vous me citez dans votre README.

### Description des commandes

**Admin**:

voici la liste et l'explication des commandes [Admin](https://github.com/Merytek/Asteria_bot/tree/main/command/Admin)

_liste des commandes_:

- [eval](https://github.com/Merytek/Asteria_bot/blob/main/command/Admin/eval.js)

_explication des commandes_:

eval: cette commande permet de simuler du JS depuis le serveur cette commande ne peut être utilisé que par moi elle me permet par exemple de tester les events elle s'utilise comme ceci => `$eval <Client.emit("eventName", arguments)>`

**Fun**:

voici la liste et l'explication des commandes [Fun](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun)

_liste des commandes_:

- [8ball](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/8ball)
- [avatar](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/avatar)
- [cofee](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/cofee)
- [dance](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/dance)
- [hug](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/hug)
- [iss](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/iss)
- [joke](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/joke)
- [kiss](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/kiss)
- [lovecalc](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/lovecalc)
- [punch](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/punch)
- [say](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/say)
- [shoot](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/shoot)
- [slap](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/slap)
- [spacesearch](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/spacesearch)
- [wasted](https://github.com/Merytek/Asteria_bot/tree/main/command/Fun/wasted)

_explication des commandes_:

**8ball**: cette commande est une commande aléatoire qui permet d'avoir une réponse à une question fermé elle est utilisable par tout le monde et s'utilise comme ceci => `$8ball <question>`

**avatar**: cette commande est une commande simple qui permet de voir la pp de n'importe quelle utilisateur sur le serveur s'il est mentionné sinon se sera la pp de l'utilisateur de la commande qui sera renvoyé elle s'utilise comme ceci => `$avatar [user]`

**cofee**: cette commande est une commande assez random qui permet de donner un café à un utilisateur **mentionné** s'il n'y a pas de mention l'utilisateur ayant lancé la commande aura un messsage personnalisé disant qu'il se sert un café cette commande s'utilise comme ceci => `$cofee [user]`

**dance**: cette commande une fois utilisé enverra un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) si un utilisateur est mentionné il y aura un certain message qui sera changé si vous vous mentionnez vous même ou que vous ne mettez pas de mention elle s'utilise donc simplement comme ceci => `$dance [user]`

**hug**: cette commande une fois utilisé enverra un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) là aussi comme la commande **dance** si un utilisateur est mentionné il y aura un certain message qui sera changé si vous vous mentionnez vous même ou que vous ne mettez pas de mention elle s'utilise donc simplement comme ceci => `$hug [user]`

**iss**: cette commande se connecte à une [API](https://wheretheiss.at/w/developer) et renvoie les informations de position de l'ISS en temps réel la commande s'utilise simplement comme ceci => `$iss`

**joke**: cette commande une fois utilisé enverra une blague random venant d'un array les blagues sont plus ou moins drôle je ne suis pas un expert dans le milieu de la blague. La commande s'utilise simplement comme ceci => `$joke`

**kiss**: cette commande une fois utilisé enverra un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) là aussi comme la commande **dance** si un utilisateur est mentionné il y aura un certain message qui sera changé si vous vous mentionnez vous même ou que vous ne mettez pas de mention elle s'utilise donc simplement comme ceci => `$kiss [user]`

**lovecalc**: cette commande permet de calculer le taux d'amour entre 2 personnes il existe des bornes dans le programme si vous tombez dans ces bornes vous avez un certain message l'utilisation de la commande s'utilise comme ceci => `$lovecalc <first_args> <second_args>`

**punch**: cette commande une fois utilisé enverra un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) là aussi comme la commande **dance** si un utilisateur est mentionné il y aura un certain message qui sera changé si vous vous mentionnez vous même ou que vous ne mettez pas de mention elle s'utilise donc simplement comme ceci => `$punch [user]`

**say**: cette commande est une commande basique qui fera que le bot répétera votre message en le supprimant elle s'utilise comme ceci => `$say <message>`

**shoot**: cette commande une fois utilisé enverra un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) là aussi comme la commande **dance** si un utilisateur est mentionné il y aura un certain message qui sera changé si vous vous mentionnez vous même ou que vous ne mettez pas de mention elle s'utilise donc simplement comme ceci => `$shoot [user]`

**slap**: cette commande une fois utilisé enverra un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) là aussi comme la commande **dance** si un utilisateur est mentionné il y aura un certain message qui sera changé si vous vous mentionnez vous même ou que vous ne mettez pas de mention elle s'utilise donc simplement comme ceci => `$slap [user]`

**spacesearch**: cette commande est une commande qui va chercher sur l'API de la [NASA](https://api.nasa.gov/) des articles avec le Keyword demandé dans la commande ensuite cette article est renvoyé dans le serveur sous la forme d'un Embed la commande s'utilise comme ceci => `$spacesearch <keyword>`

**wasted**: cette commande une fois utilisé enverra un gif random venant de l'API [Tenor](https://tenor.com/gifapi/documentation#quickstart-setup) là aussi comme la commande **dance** si un utilisateur est mentionné il y aura un certain message qui sera changé si vous vous mentionnez vous même ou que vous ne mettez pas de mention elle s'utilise donc simplement comme ceci => `$wasted [user]`

**Misc**

voici la liste et l'explication des commandes [Misc](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc)

_liste des commandes_:

- [ping](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc/ping)
- [source](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc/source)
- [suggestion](https://github.com/Merytek/Asteria_bot/tree/main/command/Misc/suggestion)

_explication des commandes_:

**ping**: permet d'obtenir les latences entre l'utilisateur et le bot la commande s'utilise simplement comme ceci => `$ping`

**source**: cette commande simple redirige vers le repo du bot elle s'utilise simplement comme ceci => `$source`

**suggestion**: cette commande permet de faire une suggestion au serveur cette commande est faisable uniquement dans un certain salon puis est envoyé dans un autre salon précis la commande s'utilise comme ceci => `$suggest <suggestion>`

**Mod**

voici la liste et l'explication des commandes [Mod](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod)

_liste des commandes_:

- [ban](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/ban)
- [kick](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/kick)
- [mute](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/mute)
- [purge](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/purge)
- [unmute](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/unmute)

_explication des commandes_:

**ban**: cette commande permet de simplement bannir un utilisateur du serveur avec ou sans raison s'il n'y en a pas de donner une raison "par défaut" est utilisé elle s'utilise comme ceci => `$ban <user> [reason]`

**kick**: cette commande permet de simplement kick un utilisateur du serveur avec ou sans raison s'il n'y en a pas de donner une raison "par défaut" est utilisé elle s'utilise comme ceci => `$kick <user> [reason]`

**mute**: cette commande permet de simplement mute un utilisateur sur le serveur en lui ajoutant un rôle **muted** comme les commandes au dessus s'il n'y a pas de raison de donné une raison "par défaut" est utilisé la commande s'utilise comme ceci => `$mute <user> [reason]`

**purge**: cette commande permet de clear les messages d'un salon elle est capable de supprimer entre 2 et 100 messages d'un coup elle la syntaxe de la commande est la suivante => `$purge <int>`

**unmute**: cette commande permet d'unmute un utilisateur en lui retirant le rôle **muted** cette commande ne nécessite pas de raison pour être utilisé et elle s'utilise comme ceci => `$unmute <user>`

**rp**

voici la liste et l'explication des commandes [rp](https://github.com/Merytek/Asteria_bot/tree/main/command/rp)

_liste des commandes_:

- [letter](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/letter)
- [roll](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/roll)

_explication des commandes_:

**letter**: cette commande permet d'envoyer une lettre secrète à un utilisateur pour le côté Rp la lettre peut être ignoré ou non car la lettre secrète sera reçu par un Mp du bot. la commande s'utilise comme ceci => `$letter <user> <message>`

**roll**: cette commande est une simple commande de tire de dés qui s'utilise comme ceci => `$roll <int>`

**Xp**

voici la liste et l'explication des commandes [Xp](https://github.com/Merytek/Asteria_bot/tree/main/command/Xp)

_liste des commandes_:

- [rank](https://github.com/Merytek/Asteria_bot/tree/main/command/Xp/rank)

_explication des commandes_:

**rank**: cette commandes permet de visionner son Xp ou celui de quelqu'un d'autre s'il est mentionné elle s'utilise comme ceci => `$rank [user]`

### Dépendances Utilisé

- discord.js
- mongoose
- fs 
- snekfetch 
- ytdl-core 
- humanize-duration
- moment

### Autre Information 

**ancienne version**:

[v.0.1.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.0.1.0)
[v.0.2.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.0.2.0)
[v.0.3.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.0.3.0)
[v.0.4.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.0.4.0)

**version actuelle**:

version actuelle du projet: [v.0.5.0]

***projet:***

- [] Créer le système d'économie
- [x] Créer le système d'Xp
- [] Ajouter une commande de classement d'Xp
- [] Ajouter un système de webhooks dans les commandes Rp
- [] Ajouter la commande Unban
- [] Faire un système d'auto-rôle par réaction