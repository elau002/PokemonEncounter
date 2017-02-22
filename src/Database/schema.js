const mongoose = require('mongoose');

const pokemonSchema = mongoose.Schema({
  id: Number,
  name: String,
  weight: Number,
  abilities: { type: Array, 'default': [] },
  stats: { type: Array, 'default': [] },
  sprites: String,
  types: { type: Array, 'default': [] },
  moves: {type: Array, 'default': [] }
});

const trainerSchema = mongoose.Schema({
  username: String,
  password: String,
  pokemon: { type: Array, 'default': [] }
});

const moveSchema = mongoose.Schema({
  id: Number,
  name: String,
  pp: Number,
  type: String,
  power: Number,
  effect: String,
  accuracy: { type: Number, 'default': null },
  damageType: String,
});

exports.pokemonSchema = pokemonSchema;
exports.trainerSchema = trainerSchema;
exports.moveSchema = moveSchema;