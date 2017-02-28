const mongoose = require('mongoose');
const Mixed = mongoose.Schema.Types.Mixed;

const pokemonSchema = mongoose.Schema({
  id: Number,
  name: String,
  weight: Number,
  abilities: Mixed,
  stats: Mixed,
  sprites: String,
  types: Mixed,
  moves: Mixed
});

const trainerSchema = mongoose.Schema({
  username: String,
  password: String,
  pokemon: Mixed
});

const moveSchema = mongoose.Schema({
  id: Number,
  name: String,
  pp: Number,
  type: String,
  power: Number,
  effect: String,
  accuracy: Mixed,
  damageType: String,
  priority: Number,
});

const abilitySchema = mongoose.Schema({
  id: Number,
  name: String,
  pokemon: Mixed,
  effect: String
});

const typeSchema = mongoose.Schema({
  id: Number,
  name: String,
  damageRelations: Mixed,
  moves: Mixed,
  pokemon: Mixed,
});

exports.pokemonSchema = pokemonSchema;
exports.trainerSchema = trainerSchema;
exports.moveSchema = moveSchema;
exports.abilitySchema = abilitySchema;
exports.typeSchema = typeSchema;