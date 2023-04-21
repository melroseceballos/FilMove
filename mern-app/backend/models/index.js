require('dotenv').config()
const mongoose = require('mongoose')
const mongodbUri = process.env.MONGODBURI;

// ASYNC FUNCTION 
// CONNECTION TO MONGODB ATLAS
(async function () {
    await mongoose.connect(mongodbUri)
    console.log('Mongoose is connected to ', mongodbUri)
})().catch(err => console.log('Monngoose connection error:\n' + err))

// Exporting models and seed data to server.js
module.exports = {
    Review: require('./review')
}