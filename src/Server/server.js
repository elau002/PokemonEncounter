const express = require('express');
const router = require('./router.js');

const app = express();
const PORT = process.env.PORT || 4824;

require('./middleware.js')(app, express);

app.use('/', router);

app.listen(PORT, function() {
  console.log('Express listening on port ', PORT);
});

// app.get('/api/pokemon', function(req, res) {
//   request(pkmnURL + 'pokemon/1/', function(response, body) {
//     res.send(body);
//   });
// });