const mongoose = require('mongoose');
const schema = require('../schema.js');

const Type = mongoose.model('type', schema.typeSchema);

module.exports = Type;