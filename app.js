var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var FlightRouter = require('./routes/Flight');
var BoardRouter = require('./routes/Board');
var SelectorRouter = require('./routes/Selector');
var Flight = require("./models/Flight");
var ResourceRouter = require('./routes/resource');

// We can seed the collection if needed on server start async 
async function recreateDB(){
  await Flight.deleteMany();
  let instance1 = new Flight({Model: "A108",cost: 123918234,capacity:350,range:1276});
  let instance2 = new Flight({Model: "A132",cost: 120001200,capacity: 298,range:1276});
  let instance3 = new Flight({ Model: "A543",cost: 25367384,capacity: 500,range: 10000});
  instance1.save().then(doc=>{
    console.log("First object saved")}
    ).catch(err=>{
    console.error(err)});
  instance2.save().then(doc=>{
    console.log("Second object saved")}
    ).catch(err=>{
     console.error(err)})
  instance3.save().then(doc=>{
    console.log("Third object saved")}
    ).catch(err=>{
    console.error(err)})
  }
  let reseed = true;
  if (reseed) { recreateDB();}
  

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Flight',FlightRouter);
app.use('/Board',BoardRouter);
app.use('/Selector',SelectorRouter);
app.use('/Flight',Flight);
app.use('/resource',ResourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
