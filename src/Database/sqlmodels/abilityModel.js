const Sequelize = require('sequelize');
const database = require('../psqlconfig.js').database;
const Pokemon = require('./pokemonModel.js').pokemon;


const Ability = database.define('ability', {
  id: { type: 'INTEGER', primaryKey: true },
  pokemon: { type: 'INTEGER', defaultValue: null, references: { model: Pokemon, key: 'id', deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE} },
  name: { type: 'STRING', allowNull: false },
  effect: { type: 'STRING' },
  // PRIMARY KEY (id)
});

// Ability.sync().then(()=> {});

module.exports.Ability = Ability;