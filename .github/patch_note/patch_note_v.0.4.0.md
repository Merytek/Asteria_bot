# Patch note Xp update

### Description de la Release

*/!\ Ce Patch note a été écrit au propre bien après la sortie de cette release /!\\*

- version: [v0.4.0](https://github.com/Merytek/Asteria_bot/releases/tag/v0.4.0)

Cette Update contient les fichiers et le code nécessaire à un système d'Xp et de Leveling Basic via la DB mongoDB

### Ajout

- [package.json](https://github.com/Merytek/Asteria_bot/main/tree/package.json): Mise à jour de la version dans le fichier de package
- [package-lock.json](https://github.com/Merytek/Asteria_bot/main/tree/package.json): Mise à jour de la version dans le fichier package-lock
- [function.js](https://github.com/Merytek/Asteria_bot/main/tree/function.js): Ajout des fonctions `updateXp` qui permet d'ajouter l'Xp dans la DB si toute les conditions préalable sont réuni ainsi que de la fonction `updateLevel` qui permet d'ajouter un niveau ainsi que d'augmenter le nombre d'Xp requis avant de passer niveaux supérieur dans la DB
- [config.json](https://github.com/Merytek/Asteria_bot/main/tree/config.json): modification du Localhost pour un cluster hébergé par MongoDB
- [message.js](https://github.com/Merytek/Asteria_bot/main/tree/event/client/message.js): Ajout du système permettant de vérifier si les conditions sont remplies pour un passage au level supérieur ou si on peut rajouter de l'xp à l'utilisateur de plus le message automatique est aussi géré


### Supression

- [config.json](https://github.com/Merytek/Asteria_bot/main/tree/config.json):suppression des parties inutile du code notamment le `hello {user}`