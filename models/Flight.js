const mongoose = require("mongoose")
const FlightSchema = mongoose.Schema({
Model: String,
cost:Number,
capacity: Number,
range: Number
})

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

module.exports = mongoose.model("Flight",FlightSchema)
