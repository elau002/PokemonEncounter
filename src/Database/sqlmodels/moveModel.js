const database = require('../psqlconfig.js').database;

const Move = database.define('move', {
  id: { type: 'INTEGER', primaryKey: true},
  name: { type: 'STRING', allowNull: false},
  effect: { type: 'STRING', allowNull: false},
  pp: { type: 'INTEGER', defaultValue: null },
  type: { type: 'INTEGER', defaultValue: null },
  priority: { type: 'INTEGER', defaultValue: null },
  accuracy: { type: 'INTEGER', defaultValue: null },
  power: { type: 'INTEGER', defaultValue: null },
});

// Move.sync().then(()=> {});
module.exports.Move = Move;