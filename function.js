const mongoose = require("mongoose");
const { User, Register, GuildAchievements, Achievement } = require("./models/index");

module.exports = Root => {
    Root.createUser = async user => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
        const createUser = new User(merged);
        createUser.save().then(u => console.log(`nouvel utilisateur -> ${u.username}`));
    };

    Root.getUser = async user => {
        const data = await User.findOne({userID: user.id });
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

    Root.createCharacter = async user => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
        const createCharacter = new Register(merged);
        createCharacter.save().then(u => console.log(`nouveau personnage enregistré de -> ${u.username}`)).catch(console.error);
    }

    Root.getCharacter = async user => {
        const data = await Register.findOne({ userID: user.id });
        if (data) return data;
        else return;
    }

    Root.getCharacterByName = async (user, character_name) => {
        const data = await Register.findOne({ name: character_name, userID: user.id });
        if (data) return data;
        else return;
    }

    Root.getCharacters = async user => {
        const data = await Register.find({ userID: user.id });
        if (data) return data;
        else return;
    }

    Root.updateCharacter = async (user, characterName, settings) => {
        let data = await Root.getCharacterByName(user, characterName);
        if (typeof data != "object") data = {};
        for (const key in settings) {
            if (data[key] !== settings[key]) data[key] = settings[key];
        }
        return data.updateOne(settings);
    }

    Root.updateAvatar = async (user, characterName, avatar_url) => {
        const newAvatar = avatar_url;
        await Root.updateCharacter(user, characterName, { avatar: newAvatar });
    }

    Root.updateName = async (user, characterName, newCharName) => {
        const newName = newCharName;
        await Root.updateCharacter(user, characterName, { name: newName });
    }

    Root.updateBracket = async (user, characterName, character_bracket) => {
        const newBracket = character_bracket;
        await Root.updateCharacter(user, characterName, { bracket: newBracket });
    }

    Root.removeChar = async (user, character_name) => {
        await Register.findOneAndDelete({ userID: user.id, name: character_name });
    }

    Root.removeUser = async user => {
        await User.findOneAndDelete({ userID: user.id});
    }

    Root.updateXp = async (Root, member, xp) => {
        const UpdateUser = await Root.getUser(member);
        const XpAdd = UpdateUser.experience + xp;
        await Root.updateUser(member, { experience: XpAdd });
    }

    Root.updatePosition = async (Root, member) => {
        const updateUser = await Root.getUser(member);
        const positionUp = updateUser.pos + 1;
        await Root.updateUser(member, { pos: positionUp });
    }
    Root.emoji = (id) => {
        return Root.emojis.get(id).toString();
    }

    Root.createGuildAchievement = () => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() });
        const createUser = new GuildAchievement(merged);
        createUser.save().then(u => console.log(`Achievements du serveur créé`));
    }

    Root.getGuildAchievement = () => {
        const data = GuildAchievements.findOne();   
        if (data) return data;
        else return;
    }

    Root.getAllGuildAchievements = () => {
        const data = GuildAchievements.find();
        if (data) return data;
        else return;
    }

    Root.getUserAchievement = user => {
		const data = Achievement.find( { userID: user.id } );
        if (data) return data;
        else return;
    }

    Root.createUserAchievement = user => {
        const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, user);
        const createUser = new Achievement(merged);
        createUser.save().then(u => console.log(`Achievements de l'utilisateur: ${u.username} créé`));
    }
}
