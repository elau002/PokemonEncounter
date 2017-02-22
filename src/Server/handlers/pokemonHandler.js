const Pokemon = require('../../Database/models/pokemonModel.js');
const db = require('../../Database/config.js');
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
  Pokemon.findOne( {id: pokemon} )
    .exec((err, pokemon)=>{
      if (err) { console.error(err); }
      cb(null, pokemon);
    });
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

exports.getPokemonFromExternalAPI = (id, res)=> {
  rp(pkmnURL + 'pokemon/' + id + '/')
    .then((response, next)=> {
      response = JSON.parse(response);
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
        })
      };
      exports.createPokemonDB(entry, (err, pokemon)=>{
        if (err) {
          console.log(err);
        } else {
          res.send(pokemon);
        }
      });
    })
    .catch((err)=> { console.error(err); });
};