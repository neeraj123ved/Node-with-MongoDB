const mongoose = require('mongoose');
const monogoUrl= 'mongodb://localhost:27017/hotels';


mongoose.connect(monogoUrl,{
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