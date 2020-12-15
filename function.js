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
        }
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
        const require = UpdateUser.requis * 4;
        await Root.updateUser(member, {experience: XpRest, requis: require, level: levelUp });

    }
}