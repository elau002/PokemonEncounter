const express = require('express');
const router = require('./router.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4824;

require('./middleware.js')(app, express);

app.use('/', express.static( path.join(__dirname, '../../')));
app.use('/', router);

app.listen(PORT, function() {
  console.log('Express listening on port ', PORT);
});
