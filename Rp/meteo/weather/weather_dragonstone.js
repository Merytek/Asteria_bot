module.exports = Root => {
    Root.DragonestoneMeteo = (rnd = (Math.random() * 1000) + 1 ) => {
        setInterval(function () {
            if (rnd <= 200) {
                Root.channels.fetch("826431590845775872", true, true)
                .then(channel => channel.setName("Dragonstone: Enneigé").catch(console.error));
            }
            if (rnd > 200 && rnd <= 400) {
                Root.channels.fetch("826431590845775872", true, true)
                .then(channel => channel.setName("Dragonstone: Blizzard").catch(console.error));
            }
            if (rnd > 400 && rnd <= 600) {
                Root.channels.fetch("826431590845775872", true, true)
                .then(channel => channel.setName("Dragonstone: Neige extrême").catch(console.error));            
            }
            if (rnd > 600 && rnd <= 800) {
                Root.channels.fetch("826431590845775872", true, true)
                .then(channel => channel.setName("Dragonstone: Gèle extrême").catch(console.error));
            }
            if (rnd > 800 && rnd <= 850) {
                Root.channels.fetch("826431590845775872", true, true)
                .then(channel => channel.setName("Dragonstone: Pluie").catch(console.error));
            }
            if (rnd > 850 && rnd <= 900) {
                Root.channels.fetch("826431590845775872", true, true)
                .then(channel => channel.setName("Dragonstone: Orage").catch(console.error));
            }
            if (rnd > 900 && rnd <= 1000) {
                Root.channels.fetch("826431590845775872", true, true)
                .then(channel => channel.setName("Dragonstone: Ensolleilé").catch(console.error));
            }
        }, 10800000);
    }
}