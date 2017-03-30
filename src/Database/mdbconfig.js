const mongoose = require('mongoose');

mongoURI = 'mongodb://elau002:elau002@ds143340.mlab.com:43340/heroku_d5vsssn0';
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('db connection established');
});

module.exports = db;

