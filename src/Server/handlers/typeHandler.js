const Type = require('../../Database/models/typeModel.js');
const db = require('../../Database/mdbconfig.js');
const rp = require('request-promise');
const bodyParser = require('body-parser');

const pkmnURL = 'http://pokeapi.co/api/v2/';

exports.createTypeDB = (type, cb)=> {
  Type.create(type, (err, type)=> {
    if (err) { return cb(err); }
    cb(null, type);
  });
};

exports.getTypeDB = (type, cb)=> {
  Type.findOne( { id: type } )
  .exec((err, type) => {
    if (err) { console.error(err); }
    cb(null, type);
  }); 
};

exports.getAllTypes = (req, res)=>{
  Type.find()
  .exec((err, type) => {
    if (err) { console.error(err); }
    res.send(type.sort((a, b)=> { return a.id - b.id; }));
  });
};

exports.getOneType = (req, res)=> {
  let name = req.query.id;
  exports.getTypeDB(name, (err, type)=> {
    if (err) { console.error(err); }
    if (!type) {
      exports.getTypeFromExternalAPI(name, res);
    } else {
      res.send(type);
    }
  });
};

exports.getTypeFromExternalAPI = (id, res)=> {
  rp(pkmnURL + 'type/' + id + '/')
    .then((response, next)=> {
      response = JSON.parse(response);
      let entry = {
        id: response.id,
        name: response.name,
        damageRelations: response.damage_relations,
        moves: response.moves.map((move)=> {
          return move.name;
        }),
        pokemon: response.pokemon.map((pkmn)=> {
          return pkmn.pokemon.name;
        })
      };
      exports.createTypeDB(entry, (err, type)=>{
        if (err) {
          console.log(err);
        } else {
          res.send(type);
        }
      });
    })
    .catch((err)=> { console.error(err); });
};