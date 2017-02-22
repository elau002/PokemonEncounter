const mongoose = require('mongoose');
const schema = require('../schema.js');

const Pokemon = mongoose.model('Pokemon', schema.pokemonSchema);

module.exports = Pokemon;