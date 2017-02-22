const apiRouter = require('./routes/apiRoute.js');
const router = require('express').Router();

router.use('/api', apiRouter);

module.exports = router;