const Pokemon = require('../../Database/models/pokemonModel.js');
const PokemonSQL = require('../../Database/sqlmodels/pokemonModel.js').Pokemon;
const db = require('../../Database/mdbconfig.js');
const rp = require('request-promise');
const bodyParser = require('body-parser');

const pkmnURL = 'http://pokeapi.co/api/v2/';


exports.createPokemonDB = (pokemon, cb)=> {
  Pokemon.create(pokemon, (err, pokemon)=> {
    if (err) { return cb(err); }
    cb(null, pokemon);
  });
};

exports.getPokemonDB = (pokemon, cb) => {
  if (typeof pokemon === 'number') {
    Pokemon.findOne( {id: pokemon} )
      .exec((err, pokemon)=>{
        if (err) { console.error(err); }
        cb(null, pokemon);
      });
  }
  if (typeof pokemon === 'string') {
    Pokemon.findOne( {name: pokemon} )
      .exec((err, pokemon)=>{
        if (err) { console.error(err); }
        cb(null, pokemon);
      });
  }
}; 

exports.getAllPokemon = (req, res) => {
  Pokemon.find()
  .exec((err, pokemon) => {
    if (err) { console.error(err); }
    res.send(pokemon.sort((a, b)=> { return a.id - b.id; }));
  });
};

exports.getOnePokemon = (req, res)=> {
  let id = req.query.id;
  exports.getPokemonDB(id, (err, pokemon)=> {
    if (err) { console.error(err); }
    if (!pokemon) {
      exports.getPokemonFromExternalAPI(id, res);
    } else {
      res.send(pokemon);
    }
  });
};

exports.getOnePokemonByName = (req, res)=> {
  let name = req.query.name;
  exports.getPokemonDB(name, (err, pokemon)=> {
    if (err) { console.error(err); }
    if (!pokemon) {
      exports.getPokemonFromExternalAPI(name, res);
    } else {
      res.send(pokemon);
    }
  });
};

exports.gachaPokemon = (req, res)=> {
  let gen = Math.ceil(Math.random() * 100);
  // PokemonSQL.findAll({ where: {id: 1 }})
  //   .then((res)=> { console.log(res); } )
  //   .catch((err) => { console.log(err); } );
  Pokemon.find()
    .exec((err, pokemon) => {
      if (err) { console.error(err); }
      let sent = false;
      while (!sent) {
        let id = Math.floor(Math.random() * 498);
        if (pokemon[id].catchRate < 5 && gen >= 99) {
          sent = !sent;
          res.send(pokemon[id]);
        } else if (pokemon[id].catchRate >= 5 && pokemon[id].catchRate < 50 && gen >= 90 && gen < 99) {
          sent = !sent;
          res.send(pokemon[id]);
        } else if (pokemon[id].catchRate >= 50 && pokemon[id].catchRate < 100 && gen >= 80 && gen < 90) {
          sent = !sent;
          res.send(pokemon[id]);    
        } else if ( pokemon[id].catchRate >= 100 && pokemon[id].catchRate < 150 && gen >= 50 && gen < 80) {
          sent = !sent;
          res.send(pokemon[id]);
        } else if ( pokemon[id].catchRate >= 150 && gen < 50) {
          sent = !sent;
          res.send(pokemon[id]);
        } 
      }
    });
};

exports.getPokemonFromExternalAPI = (id, res)=> {
  rp(pkmnURL + 'pokemon/' + id + '/')
    .then((response, next)=> {
      response = JSON.parse(response);
      rp(`${pkmnURL}pokemon-species/${id}/`)
        .then((resp, next) => {
          let details = JSON.parse(resp);
          let entry = {
            id: response.id,
            name: response.name,
            weight: response.weight,
            abilities: response['abilities'].map((ability)=>{
              return {
                ability: ability.ability.name,
                hidden: ability.is_hidden
              };
            }),
            stats: response.stats.map((stat)=>{
              return {
                name: stat.stat.name, 
                value: stat.base_stat
              };
            }),
            sprites: response.sprites.front_default,
            types: response.types.map((type)=> {
              return {
                slot: type.slot,
                type: type.type.name
              };
            }),
            moves: response.moves.map((move)=> {
              return {
                name: move.move.name
              };
            }),
            catchRate: details.capture_rate
          };
          exports.createPokemonDB(entry, (err, pokemon)=>{
            if (err) {
              console.log(err);
            } else {
              res.send(pokemon);
            }
          });
        });
    })
    .catch((err)=> { console.error(err); });
};