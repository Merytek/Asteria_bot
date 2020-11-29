const mongoose = require("mongoose");
const { DBCONNECTION } = require("./config.json");

module.exports = {
    init: () => {
        const mongOption = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
            autoIndex: false,
            poolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            family: 4
        }
        mongoose.connect(DBCONNECTION, mongOption);
        mongoose.Promise = global.Promise;
        mongoose.connection.on("connected", () => console.log("mongoose est connecté"));
    }
}