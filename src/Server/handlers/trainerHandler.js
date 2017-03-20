const Trainer = require('../../Database/models/trainerModel.js');
const db = require('../../Database/mdbconfig.js');
const bcrpyt = require('bcrypt');

const saltRounds = 10;


exports.createTrainerDB = (trainer, cb) => {
  Trainer.create(trainer, (err, trainer)=> {
    if (err) { return cb(err); }
    cb(null, trainer);
  });
};

exports.getTrainerDB = (name, cb) => {
  Trainer.findOne({ username: name })
    .exec((err, trainer)=> {
      if (err) { console.error(err); }
      cb(null, trainer);
    });
};

exports.createTrainer = (req, res) => {
  let trainer = req.body;
  exports.getTrainerDB(trainer.username, (err, DBtrainer)=> {
    if (err) { console.error(err); }
    if (!DBtrainer) {
      bcrpyt.hash(trainer.password, saltRounds, (err, hash)=> {
        trainer.password = hash;
        exports.createTrainerDB(trainer, (err, savedTrainer)=> {
          if (err) {
            console.error(err);
          } 
          res.send(201);
        });
      });
    } else {
      res.send(208);
    }
  });
};

exports.getTrainer = ((req, res) => {
  let trainer = req.query;
  exports.getTrainerDB(trainer.username, (err, DBtrainer)=> {
    if (err) { console.error(err); }
    bcrpyt.compare(trainer.password, DBtrainer.password, (err, valid)=> {
      if (err) {
        res.send(401);
      }
      if (valid) {
        res.send('hello'), 304;
      }
    });
  });
});