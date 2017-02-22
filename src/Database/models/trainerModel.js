const mongoose = require('mongoose');
const schema = require('../schema.js');

const Trainer = mongoose.model('trainer', schema.trainerSchema);

module.exports = Trainer;