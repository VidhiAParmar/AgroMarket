const mongoose = require('mongoose')
require('dotenv').config();

function DBConnection(){
    mongoose.connect(
        process.env.MONGO_URL
    ).then(() => console.log("We connected to DB 😉"))
    .catch((err) => console.log("Error connecting to dtabase"+err));
    console.log("in db...");
}

module.exports = DBConnection;