const mongoose = require('mongoose');
const schema = require('../schema.js');

const Ability = mongoose.model('Ability', schema.abilitySchema);

module.exports = Ability;