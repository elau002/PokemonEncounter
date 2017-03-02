const router = require('express').Router();
const pokemonHandler = require('../handlers/pokemonHandler.js');
const trainerHandler = require('../handlers/trainerHandler.js');
const moveHandler = require('../handlers/moveHandler.js');
const abilityHandler = require('../handlers/abilityHandler.js');
const typeHandler = require('../handlers/typeHandler.js');


router.get('/pokemon', pokemonHandler.getOnePokemon);
router.get('/pokemon/name', pokemonHandler.getOnePokemonByName);
router.get('/pokemon/gacha', pokemonHandler.gachaPokemon);
router.get('/pokemon/all', pokemonHandler.getAllPokemon);

router.post('/trainer/signup', trainerHandler.createTrainer);
router.get('/trainer/login', trainerHandler.getTrainer);

router.get('/move', moveHandler.getOneMove);
router.get('/move/name', moveHandler.getOneMoveByName);
router.get('/move/all', moveHandler.getAllMoves);

router.get('/abilities', abilityHandler.getOneAbility);
router.get('/abilities/all', abilityHandler.getAllAbilities);

router.get('/type', typeHandler.getOneType);
router.get('/type/all', typeHandler.getAllTypes);

module.exports = router;