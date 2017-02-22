const router = require('express').Router();
const pokemonHandler = require('../handlers/pokemonHandler.js');
const trainerHandler = require('../handlers/trainerHandler.js');
const moveHandler = require('../handlers/moveHandler.js');

router.get('/pokemon', pokemonHandler.getOnePokemon);
router.get('/pokemon/all', pokemonHandler.getAllPokemon);

router.post('/trainer/signup', trainerHandler.createTrainer);

router.get('/move', moveHandler.getOneMove);
router.get('/move/all', moveHandler.getAllMoves);

module.exports = router;