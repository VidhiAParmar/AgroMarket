const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.json())
const cookieParser = require('cookie-parser');

const authRoutes = require('./Routes/auth');
const productRoutes = require('./Routes/product');

require('dotenv').config();
require('./db')

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use('/product', productRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'The API is working' });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});

const mongoose = require('mongoose');

function DBConnection(){
    mongoose.connect(
        process.env.MONGO_URL
    ).then(() => console.log("Connected to MongoDB 🚀"))
    .catch((err) => console.error("Error connecting to database:", err));
}

// Call the DBConnection function to initiate the connection
DBConnection();

module.exports = DBConnection;
