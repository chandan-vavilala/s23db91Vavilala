const mongoose = require("mongoose")

const FlightSchema = mongoose.Schema({
  Model: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  cost: {
    type: Number,
    required: true,
    min: 0
  },
  capacity: {
    type: Number,
    required: true,
    min: 1
  },
  range: {
    type: Number,
    required: true,
    min: 0
  }
})

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
  console.log("Connection to DB succeeded")
});

module.exports = mongoose.model("Flight", FlightSchema)