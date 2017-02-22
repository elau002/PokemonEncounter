const express = require('express');
const router = require('./router.js');

const app = express();
const PORT = process.env.PORT || 4824;

require('./middleware.js')(app, express);

app.use('/', router);

app.listen(PORT, function() {
  console.log('Express listening on port ', PORT);
});
