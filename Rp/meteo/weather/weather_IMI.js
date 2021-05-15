module.exports = Root => {
    Root.IMIMeteo = (rnd = (Math.random() * 624) + 1 ) => {
        setInterval(function () {
            if (rnd <= 300) {
                Root.channels.fetch("826431662124171364", true, true)
                .then(channel => channel.setName("Instiut Magique: Ensoleillé").catch(console.error));
            }
            if (rnd > 300 && rnd <= 500) {
                Root.channels.fetch("826431662124171364", true, true)
                .then(channel => channel.setName("Institut Magique: Venteux").catch(console.error));
            }
            if (rnd > 500 && rnd <= 550) {
                Root.channels.fetch("826431662124171364", true, true)
                .then(channel => channel.setName("Institut Magique: Enneigé").catch(console.error));            
            }
            if (rnd > 550 && rnd <= 600) {
                Root.channels.fetch("826431662124171364", true, true)
                .then(channel => channel.setName("Institut Magique: Pluvieux").catch(console.error));
            }
            if (rnd > 600 && rnd <= 625) {
                Root.channels.fetch("826431662124171364", true, true)
                .then(channel => channel.setName("Institut Magique: Orageux").catch(console.error));
            }
        }, 8.64e+7);
    }
}