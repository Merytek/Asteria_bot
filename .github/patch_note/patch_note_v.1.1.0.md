# Patch note Final XP

### Description de la Release

- Version: [v.1.1.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.1.1.0)

Cette release est la final XP update elle contient les dernière bribes de code pour avoir un système d'Xp 100% fonctionnel mais elle contient aussi la pre-release du système RP dans lequel je m'engage ainsi que l'ajout de la commande `unban` qui sera traité très prochainement

### Ajout

- modification du [message.js](https://github.com/Merytek/Asteria_bot/blob/main/event/client/message.js) par l'ajout d'un morceau de code pour renvoyer la **nouvelle** valeur de la DB (avant ça renvoyait l'ancienne)
- ajout de la commande [register.js](https://github.com/Merytek/Asteria_bot/blob/main/command/rp/register.js) permettant de créer une identité de personnage qui sera stocké dans la DB
- ajout de la commande [liste.js](https://github.com/Merytek/Asteria_bot/blob/main/command/rp/liste.js) qui permet de lister **tous les personnages** d'un utilisateur avec leur Bracket
- ajout de la commande [picture.js](https://github.com/Merytek/Asteria_bot/blob/main/command/rp/picture.js) qui elle permet de modifier l'image qui sera utilisé par le webhooks quand le personnage sera utilisé *futur release*
- ajout de la commande [remove.js](https://github.com/Merytek/Asteria_bot/blob/main/command/rp/remove.js) qui permet de supprimer un des personnages de la DB
- ajout de la commande [settings.js](https://github.com/Merytek/Asteria_bot/blob/main/command/rp/settings.js) commande permettant de modifier les informations sur un personnage pour l'instant son **Nom** ainsi que son **Bracket**
- modification de [roll.js](https://github.com/Merytek/Asteria_bot/blob/main/command/rp/roll.js) vérification sur le **type** de donnée envoyé dans l'argument et s'il existe 
- modification de [guildMemberRemove.js](https://github.com/Merytek/Asteria_bot/blob/main/event/member/guildMemberRemove.js) ajout d'une méthode de suppresion des données lorsque l'utilisateur quitte le serveur
- modification de [user.js](https://github.com/Merytek/Asteria_bot/blob/main/models/user.js) l'objet level est maintenant **par défaut** à 0
- ajout du schéma [register.js](https://github.com/Merytek/Asteria_bot/blob/main/models/register.js) schéma de donnée utilisé pour enregistrer les personnages des utilisateurs
- modification de [config.json](https://github.com/Merytek/Asteria_bot/blob/main/config.json) ajoutant **ID** et **TOKEN** du webhooks ainsi que d'un emplacement pour le lien vers le **feed rss** d'un site 

### Supression

- suppresion de `updateLevel` dans [function.js](https://github.com/Merytek/Asteria_bot/blob/main/function.js)