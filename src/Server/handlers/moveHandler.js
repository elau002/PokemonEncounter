const Move = require('../../Database/models/moveModel.js');
const db = require('../../Database/config.js');
const rp = require('request-promise');
const bodyParser = require('body-parser');

const pkmnURL = 'http://pokeapi.co/api/v2/';

exports.createMoveDB = (move, cb)=> {
  Move.create(move, (err, move)=> {
    if (err) { return cb(err); }
    cb(null, move);
  });
};

exports.getMoveDB = (move, cb)=> {
  Move.findOne( { id: move } )
  .exec((err, move) => {
    if (err) { console.error(err); }
    cb(null, move);
  }); 
};

exports.getAllMoves = (req, res)=>{
  Move.find()
  .exec((err, move) => {
    if (err) { console.error(err); }
    res.send(move.sort((a, b)=> { return a.id - b.id; }));
  });
};

exports.getOneMove = (req, res)=> {
  let name = req.query.id;
  exports.getMoveDB(name, (err, move)=> {
    if (err) { console.error(err); }
    if (!move) {
      exports.getMoveFromExternalAPI(name, res);
    } else {
      res.send(move);
    }
  });
};

exports.getMoveFromExternalAPI = (id, res)=> {
  rp(pkmnURL + 'move/' + id + '/')
    .then((response, next)=> {
      response = JSON.parse(response);
      let entry = {
        id: response.id,
        name: response.name,
        pp: response.pp,
        type: response.type.name,
        power: response.power,
        effect: response.effect_entries[0].effect.replace('$effect_chance%', `${response.effect_chance}%`),
        accuracy: response.accuracy,
        damageType: response.type.name,
        priority: response.priority
      };
      exports.createMoveDB(entry, (err, move)=>{
        if (err) {
          console.log(err);
        } else {
          res.send(move);
        }
      });
    })
    .catch((err)=> { console.error(err); });
};