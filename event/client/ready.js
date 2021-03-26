const { PREFIX } = require("../../config.json");

module.exports = (Root) => {
    const activities = ["planter des arbres", 
                        "chanter avec Wedjene", 
                        "unifier la relativité général et la mécanique quantique", 
                        "soigner sa calvitie", 
                        "trainer sur youtube", 
                        "call of duty cold wars", 
                        "frapper Marine Lepen", 
                        "jongler avec des micro-ondes", 
                        "manger de la ferrite", 
                        "changer son alim", 
                        "décharger OmégaMachina de ses électrons",
                        "préparer un plan pour dominer le monde",
                        "faire des câlin à Nervous Nightingales",
                        "rêver de faire le tour du monde",
                        "programmer en Lisp",
                        "Root.user.setActivity(`${activities[actID]}`);"]; //les divers statut du bot

    console.log(`connecté en tant que: ${Root.user.tag}`)
    Root.user.setStatus("dnd")
    setInterval(function () {
        let actID = Math.floor(Math.random() * Math.floor(activities.length));
        Root.user.setActivity(`${activities[actID]} [${PREFIX}help pour afficher l'aide]`);
    }, 60000)

}