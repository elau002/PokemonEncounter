const mongoose = require('mongoose');
const schema = require('../schema.js');

const Move = mongoose.model('Move', schema.moveSchema);

module.exports = Move;