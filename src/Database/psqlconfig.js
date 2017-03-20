const Sequelize = require('sequelize');
const sequelize = new Sequelize('pokemonEncounter', null, null, { host: 'localhost', dialect: 'postgres', port: 5432 });


sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports.database = sequelize;