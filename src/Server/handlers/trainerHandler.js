const Trainer = require('../../Database/models/trainerModel.js');
const db = require('../../Database/config.js');
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
          let encounter = Math.floor((Math.random() * 720));
          res.send({ number: encounter});
        });
      });
    } 
    if (DBtrainer) {
      bcrpyt.compare(trainer.password, DBtrainer.password, (err, valid)=> {
        if (valid) {
          let encounter = Math.floor((Math.random() * 720));
          res.send({ number: encounter});
        }
      });
    }
  });
};
