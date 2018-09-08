const express = require('express');
let app = express();
const routes = require('./router.js');
const Parser = require('body-parser');

app.use(Parser.json());
app.use(Parser.urlencoded( {extended: true}));

app.use(express.static(__dirname + '/../client/dist'));
app.use('/api', routes);

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

