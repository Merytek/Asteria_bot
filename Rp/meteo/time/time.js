module.exports = Root => {
    Root.Time = (date = new Date()) => {
        let Hour = date.getHours();
        setInterval(function () {
            if (Hour >= 6 && Hour <= 12) {
                Root.channels.fetch("826430887176306688")
                .then(channel => channel.setName("Journée: Matin")).catch(console.error);
            }
            if (Hour > 12 && Hour <= 18) {
                Root.channels.fetch("826430887176306688")
                .then(channel => channel.setName("Journée: Après-midi")).catch(console.error);
            }
            if (Hour > 18 && Hour <= 22) {
                Root.channels.fetch("826430887176306688")
                .then(channel => channel.setName("Journée: Soir")).catch(console.error);
            }
            if (Hour > 22 && Hour < 6) {
                Root.channels.fetch("826430887176306688")
                .then(channel => channel.setName("Journée: Nuit")).catch(console.error);
            }
        }, 7200000);

    }
}