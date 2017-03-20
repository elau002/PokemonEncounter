const Sequelize = require('sequelize');
const database = require('../psqlconfig.js').database;
const Type = require('./typeModel.js').Type;
const Ability = require('./abilityModel').Ability;
const Move = require('./moveModel.js').Move;

const Pokemon = database.define('pokemon', {
  id: { type: 'INTEGER', primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false },
  weight: { type: 'INTEGER', defaultValue: null },
  sprite: { type: Sequelize.STRING, allowNull: false },
  catchRate: { type: 'INTEGER', defaultValue: null },
  ability: { type: 'INTEGER', defaultValue: null, references: { model: Ability, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE} },
  stats: { type: Sequelize.BLOB },
  types: { type: 'INTEGER', defaultValue: null, references: { model: Type, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE } },
  moves: { type: 'INTEGER', defaultValue: null, references: { model: Move, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE} },
  // PRIMARY KEY (id),
});

// Pokemon.sync().then(()=> {});

exports.Pokemon = Pokemon;