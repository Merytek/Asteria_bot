# Patch note RolePlay tools

### Description de la Release

- Version: [v.1.2.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.1.2.0)

Cette release est basé sur la partie roleplay du bot celle-ci intèger un système de proxying de message inspiré de celui de [Tupperbox](https://github.com/Runi-c/Tupperbox) mais ce dernier intègre aussi des outils de modération pour cette nouvelle partie tel que la commande **target** cette release ajoute aussi des correctif mineur qui seront spécifié dans la partie ajout

### Ajout

- [.gitignore](https://github.com/Merytek/Asteria_bot/tree/main/.gitignore): Qui me permet de retirer du repo les fichiers node_modules et de protéger le fichier config.js
- [roll.js](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/roll.js): Ajout de variable modifier qui permette d'altérer le résultat final de la commande en fonction de si le joueur à reçu un buff ou un debuff
- [unban.js](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/unban.js): Ajout de la commande unban pour comme son nom l'indique unban les personnes banni de base destiné pour la [v.0.2.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.2.0) cette commande a juste été oublié
- [liste.js](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/liste.js): Ajout d'une commande qui liste chacun des personnages enregistré avec leur alias s'ils en ont
- [picture.js](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/picture.js): Ajout d'une commande pour définir une image à votre personnage image qui sera réutilisé comme pp par le webhooks
- [register.js](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/register.js): Ajout d'une commande pour enregistrer son personnage dans la DB
- [remove.js](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/remove.js): Ajout d'une commande inverse de **register** qui elle permet de supprimer son personnage
- [settings.js](https://github.com/Merytek/Asteria_bot/tree/main/command/rp/settings.js): Ajout d'une commande pour modifier les informations du personnage tel que son nom ou son alias
- [target.js](https://github.com/Merytek/Asteria_bot/tree/main/command/Mod/target.js): Commande de modération qui permet de voir à qui appartient quel personnage
- [forceremove.js](https://github.com/Merytek/Asteria_bot/tree/main/command/Admin/forceremove.js): Commande d'Admin cette fois-ci qui permet de forcer la supression d'un personnage 
- [function.js](https://github.com/Merytek/Asteria_bot/tree/main/function.js): Ajout de plusieurs fonction qui permettent de récupérer des personnage par leur alias ou leur nom d'autre pour mettre à jour l'alias, le nom et l'image 
- [message.js](https://github.com/Merytek/Asteria_bot/tree/main/event/client/message.js): Ajout de la fonctionnalité pour utiliser les personnages 
- [guildMemberRemove.js](https://github.com/Merytek/Asteria_bot/tree/main/event/member/guildMemberRemove.js): Ajout de la fonction pour supprimer les éléments de la DB lié à la personne qui vient de quitter pour faire de la place

### Supression

- **node_modules**: suppression du dossier node modules pour faire plus de place sur le repo