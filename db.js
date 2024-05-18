const mongoose = require('mongoose');
require("dotenv").config();
// const mongoUrl= 'mongodb://localhost:27017/hotels';
const mongoUrl = process.env.DB_URL;

mongoose.connect(mongoUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// monogodb connection
const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected monogodb server');
});

db.on('error', (error) => {
    console.log('Error monogodb server', error);
});

db.on('disConnected', () => {
    console.log('disConnected monogodb server');
});

module.exports = db;