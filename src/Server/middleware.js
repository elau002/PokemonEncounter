const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');


module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(cors());
};