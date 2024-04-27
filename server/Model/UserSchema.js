const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    city: String,
    country: String,
    email: String,
    password: String
})

const UserModal = mongoose.model("users",UserSchema)

module.exports = UserModal