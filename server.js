var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 8080;

// Setup express server
var app = express();

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Set app to listen for connection with server
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
