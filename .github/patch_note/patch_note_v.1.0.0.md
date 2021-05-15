# Patch note Alias update V2

### Description de la Release

- Version: [v.1.0.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.1.0.0)

Cette release est la seconde version de la release [v.0.6.0](https://github.com/Merytek/Asteria_bot/releases/tag/v.0.6.0) qui intégrait les alias sauf qu'ils n'étaient pas à 100% fonctionnel et forcément créaient des bugs sur certaines commandes

### Ajout

- Sur chaque fichier sont ajouter les **alias**
- [message.js](https://github.com/Merytek/Asteria_bot/blob/main/event/client/message.js) ajout de la fonction pour reconnaitre les alias comme commande ainsi qu'une refont du fichier pour plus de clarté

### Supression

- [message.js](https://github.com/Merytek/Asteria_bot/blob/main/event/client/message.js) suppression de l'ancien système d'alias
