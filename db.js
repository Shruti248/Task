const mongoose = require('mongoose')

require('dotenv').config();

const dbURL = process.env.MONGO_URL;

const connectDB = async () => {
    await mongoose.connect(dbURL).then(() => {
        console.log('DATABASE CONNECTED');
    }).catch((err) => {
        console.log('Error Connecting to Database -  ' , err);
    })


}

module.exports = connectDB;
