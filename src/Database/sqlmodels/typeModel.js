const Sequelize = require('sequelize');
const database = require('../psqlconfig.js').database;
const Pokemon = require('./pokemonModel.js').Pokemon;
const Move = require('./moveModel.js').Move;

const Type = database.define('type', {
  id: { type: 'INTEGER', primaryKey: true },
  name: { type: 'STRING', allowNull: false },
  moves: { type: 'INTEGER', defaultValue: null, references: { model: Move, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE} },
  pokemon: { type: 'INTEGER', defaultValue: null, references: { model: Pokemon, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE} },
  damageRelationship: { type: 'ARRAY' },
  // PRIMARY KEY (id)
});

// Type.sync().then(()=> {});

module.exports.Type = Type;