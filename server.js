var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Set up port to be either the host's designated port, or 8080
var PORT = process.env.PORT || 8080;

// Setup express server
var app = express();

app.use(express.static(path.join(__dirname + '/app/public')));

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Set app to listen for connection with server
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
