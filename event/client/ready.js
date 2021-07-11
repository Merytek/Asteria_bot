const { PREFIX } = require("../../config.json");

module.exports = async (Root) => {
    const GuildAchievement = await Root.getGuildAchievement();

    const activities = ["Planter des arbres", 
                        "Chanter avec Wedjene", 
                        "Unifier la relativité général et la mécanique quantique", 
                        "Soigner sa calvitie", 
                        "Trainer sur youtube",
                        "Taper Skynet",
                        "Frapper Marine Lepen", 
                        "Jongler avec des micro-ondes", 
                        "Manger de la ferrite", 
                        "Changer son alim", 
                        "Décharger OmégaMachina de ses électrons",
                        "Préparer un plan pour dominer le monde",
                        "Faire des câlin à Aether",
                        "Rêver de faire le tour du monde",
                        "Programmer en Lisp",
                        "Root.user.setActivity(`${activities[actID]}`);",
                        "Boire la bière de Dark Knight",
                        "Ajouter des fautes dans les romans de Cerise",
                        "Débrancher les périphériques d'ordinateur de PanthèreBleu71",
                        "déconstruire les legos d'Antte",
                        "Voler la RAM de Bleiz ruz",
                        "Ajouter des fausses notes dans les musiques de Ghost",
                        "Modifier le nom des variables des codes d'Aether",
                        "Hacker la NSA avec un pendule"]; //les divers statut du bot

    console.log(`connecté en tant que: ${Root.user.tag}`)
    Root.user.setStatus("dnd");
    setInterval(function () {
        let actID = Math.floor(Math.random() * Math.floor(activities.length));
        Root.user.setActivity(`${activities[actID]} [${PREFIX}help pour afficher l'aide]`);
    }, 60000)

    if (!GuildAchievement) {
        await Root.createGuildAchievement({
            guildID: Root.guilds.cache.get(g => g.id),
            guildName: Root.guilds.cache.get(g => g.name),
        });
    }

}