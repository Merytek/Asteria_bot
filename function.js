const mongoose = require("mongoose");
const { User } = require("./models/index");

module.exports = Root => {
    Root.createUser = async user => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
        const createUser = await new User(merged);
        createUser.save().then(u => console.log(`nouvel utilisateur -> ${u.username}`));
    };

    Root.getUser = async user => {
        const data = await User.findOne({ userID: user.id });
        if (data) return data;
        else return;
    };

    Root.updateUser = async (user, settings) => {
        let data = await Root.getUser(user);
        if (typeof data != "object") data = {};
        for (const key in settings) {
            if (data[key] !== settings[key]) data[key] = settings[key];

            return data.updateOne(settings);
        }

        Root.updateXp = async (Root, member, xp) => {
            const UpdateUser = await Root.getUser(member);
            const XpAdd = UpdateUser.experience + xp;
            await Root.updateUser(member, { experience: XpAdd });
        }

        Root.updateLevel = async (Root, member, XpRest) => {
            const UpdateUser = await Root.getUser(member);
            const levelUp = UpdateUser.level + 1;
            const require = UpdateUser.requis * 2;
            await Root.updateUser(member, { experience: XpRest, requis: require, level: levelUp });
        }

        Root.updatePosition = async (Root, member) => {
            const updateUser = await Root.getUser(member);
            const positionUp = updateUser.pos + 1;
            await Root.updateUser(member, { pos: positionUp });
        }

        Root.dayLightCycle = async (Root) => {
            setInterval(function () {
                let chan = Root.guild.channels.cache.find(c => c.id === "826430887176306688");
                const nowDate = new Date();
                if (nowDate.getHours() >= 6 || nowDate.getHours() < 18 && nowDate.getHours() != 12) {
                    chan.setName("Journée: Jour")
                }

                if (nowDate.getHours() === 12) {
                    chan.setName("Journée: Midi")
                }

                if (nowDate.getHours() >= 18 || nowDate.getHours() < 22 && nowDate.getHours() != 12) {
                    chan.setName("Journée: Soir");
                }
                if (nowDate.getHours() === 22 || nowDate.getHours() < 6) {
                    chan.setName("Journée: Nuit");
                }
            }, 10);
        }

        /*Root.UpdateDragonstoneMeteo = async (Root) => {
            setInterval(function () {
                return;
            }, 600000);
        }

        Root.UpdateShadowcityMeteo = async (Root) => {
            setInterval(function () {
                return;
            }, 600000);
        }

        Root.UpdateKalendiaMeteo = async (Root) => {
            setInterval(function () {
                return;
            }, 600000);
        }

        Root.UpdateIMIMeteo = async (Root) => {
            setInterval(function () {
                return;
            }, 600000);
        }*/
    }
}