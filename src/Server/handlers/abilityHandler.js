const Ability = require('../../Database/models/abilityModel.js');
const db = require('../../Database/config.js');
const rp = require('request-promise');
const bodyParser = require('body-parser');

const pkmnURL = 'http://pokeapi.co/api/v2/';

exports.createAbilityDB = (ability, cb)=> {
  Ability.create(ability, (err, ability)=> {
    if (err) { return cb(err); }
    cb(null, ability);
  });
};

exports.getAbilityDB = (ability, cb)=> {
  Ability.findOne( { id: ability } )
  .exec((err, ability) => {
    if (err) { console.error(err); }
    cb(null, ability);
  }); 
};

exports.getAllAbilities = (req, res)=>{
  Ability.find()
  .exec((err, ability) => {
    if (err) { console.error(err); }
    res.send(ability.sort((a, b)=> { return a.name - b.name; }));
  });
};

exports.getOneAbility = (req, res)=> {
  let name = req.query.id;
  exports.getAbilityDB(name, (err, ability)=> {
    if (err) { console.error(err); }
    if (!ability) {
      exports.getAbilityFromExternalAPI(name, res);
    } else {
      res.send(ability);
    }
  });
};

exports.getAbilityFromExternalAPI = (id, res)=> {
  rp(pkmnURL + 'ability/' + id + '/')
    .then((response, next)=> {
      response = JSON.parse(response);
      let entry = {
        id: response.id,
        name: response.name,
        pokemon: response.pokemon.map((pkmn)=> {
          return pkmn.pokemon.name;
        }),
        effect: response.effect_entries[0].effect,
      };
      exports.createAbilityDB(entry, (err, ability)=>{
        if (err) {
          console.log(err);
        } else {
          res.send(ability);
        }
      });
    })
    .catch((err)=> { console.error(err); });
};