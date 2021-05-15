module.exports = Root => {
    Root.ShadowCityMeteo = (rnd = (Math.random() * 1000) + 1 ) => {
        setInterval(function () {
            if (rnd <= 400) {
                Root.channels.fetch("826431628624134174", true, true)
                .then(channel => channel.setName("Shadowcity: Blizzard").catch(console.error));
            }
            if (rnd > 400 && rnd <= 600) {
                Root.channels.fetch("826431628624134174", true, true)
                .then(channel => channel.setName("Shadowcity: Pluvieux").catch(console.error));
            }
            if (rnd > 600 && rnd <= 800) {
                Root.channels.fetch("826431628624134174", true, true)
                .then(channel => channel.setName("Shadowcity: Orageux").catch(console.error));            
            }
            if (rnd > 800 && rnd <= 1000) {
                Root.channels.fetch("826431628624134174", true, true)
                .then(channel => channel.setName("Shadowcity: Brumeux").catch(console.error));
            }
        }, 8.64e+7);
    }
}