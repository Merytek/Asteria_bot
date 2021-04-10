module.exports = Root => {
    Root.KalendiaMeteo = (rnd = (Math.random() * 1000) + 1 ) => {
        setInterval(function () {
            if (rnd <= 600) {
                Root.channels.fetch("826431662124171364", true, true)
                .then(channel => channel.setName("Kalendia: Ensoleillé").catch(console.error));
            }
            if (rnd > 600 && rnd <= 900) {
                Root.channels.fetch("826431662124171364", true, true)
                .then(channel => channel.setName("Kalendia: Venteux").catch(console.error));
            }
            if (rnd > 900 && rnd <= 950) {
                Root.channels.fetch("826431662124171364", true, true)
                .then(channel => channel.setName("Kalendia: Orageux").catch(console.error));            
            }
            if (rnd > 950 && rnd <= 1000) {
                Root.channels.fetch("826431662124171364", true, true)
                .then(channel => channel.setName("Kalendia: Pluvieux").catch(console.error));
            }
        }, 10800000);
    }
}