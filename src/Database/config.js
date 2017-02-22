const mongoose = require('mongoose');

mongoURI = 'mongodb://localhost/pokemonEncounter';
mongoose.connect(mongoURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

db.once('open', function() {
  console.log('db connection established');
});

module.exports = db;