# Patch note

### Description de la Release

*/!\ Ce Patch note a été écrit au propre bien après la sortie de cette release /!\\*

- version: [v0.3.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.3.0)

cette release ajoute le déploiement complet de la DB via mongoose ainsi que l'ajout d'handle des event afin que le fichier principal app.js soit plus clean de plus une commande dans le dossier Admin a été rajouté

### Ajout

- [function.js](https://github.com/Merytek/Asteria_bot/main/tree/function.js): Ajout des première fonction qui seront utilisé afin de pouvoir intéragir facilement avec la DB
- [app.js](https://github.com/Merytek/Asteria_bot/main/tree/app.js): Ajout de l'handle d'event permettant de rendre le fichier plus lisible et efficace
- [event](https://github.com/Merytek/Asteria_bor/main/tree/event): Ajout des dossiers d'event ainsi que des fichiers d'event
- [ready.js](https://github.com/Merytek/Asteria_bor/main/tree/event/client/ready.js): Ajout de statut automatique du bot
- [guildMemberAdd.js](https://github.com/Merytek/Asteria_bot/main/tree/event/member/guildMemberAdd.js): Ajout du message d'arrivé automatique quand un utilisateur rejoins ainsi que de l'ajout de l'utilisateur dans la DB pour le futur système d'Xp
- [model](https://github.com/Merytek/Asteria_bot/main/tree/models): Ajout du dossier de model qui contiendra les schémas de donnée de la DB
- [user.js](https://github.com/Merytek/Asteria_bot/main/tree/models/user.js): Ajout du schéma utilisé pour l'Xp des utilisateurs
- [index.js](https://github.com/Merytek/Asteria_bot/main/tree/models/index.js): Ajout du fichier qui contiendra le lien vers tous les schémas pour plus de simplicité d'utilisation à travers les divers fichier
- [eval.js](https://github.com/Merytek/Asteria_bot/main/tree/command/Admin/eval.js): Cet commande permet de traiter du JS via le chat discord très pratique pour "simuler" un nouvelle arrivant 

### Supression

aucune supression n'a été effecuté dans cette version