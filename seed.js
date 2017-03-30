const db = require('./src/Database/mdbconfig.js');
const ability = require('./src/Database/models/abilityModel.js');
const move = require('./src/Database/models/moveModel.js');
const pokemon = require('./src/Database/models/pokemonModel.js');
const type = require('./src/Database/models/typeModel.js');
const fs = require('fs');


db.collections.abilities.drop(()=> {
  console.log('dropped collections');
  fs.readFile('abilityData.json', 'utf8', (err, data)=> {
    if (err) { throw err; }
    data = JSON.parse(data);
    for (let i = 0; i < data.length; i++) {
      ability.create(data[i], (err, ability)=> {
        if (err) { return cb(err); }
        console.log(ability);
      });
    }
  });
});

db.collections.moves.drop(()=> {
  console.log('dropped collections');
  fs.readFile('moveData.json', 'utf8', (err, data)=> {
    if (err) { throw err; }
    data = JSON.parse(data);
    for (let i = 0; i < data.length; i++) {
      move.create(data[i], (err, move)=> {
        if (err) { return cb(err); }
        console.log(move);
      });
    }
  });
});

db.collections.pokemons.drop(()=> {
  console.log('dropped collections');
  fs.readFile('pokemonData.json', 'utf8', (err, data)=> {
    if (err) { throw err; }
    data = JSON.parse(data);
    for (let i = 0; i < data.length; i++) {
      pokemon.create(data[i], (err, pokemon)=> {
        if (err) { return cb(err); }
        console.log(pokemon);
      });
    }
  });
});

db.collections.types.drop(()=> {
  console.log('dropped collections');
  fs.readFile('typeData.json', 'utf8', (err, data)=> {
    if (err) { throw err; }
    data = JSON.parse(data);
    for (let i = 0; i < data.length; i++) {
      type.create(data[i], (err, type)=> {
        if (err) { return cb(err); }
        console.log(type);
      });
    }
  });
});
