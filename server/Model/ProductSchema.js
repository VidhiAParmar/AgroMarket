const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: { type: Date, default: new Date() },
    userId: {
        type: String,
        required: true
    },
});

const Product = mongoose.model('Product',ProductSchema);
module.exports = Product;