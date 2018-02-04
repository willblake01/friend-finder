var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var PORT = 3000;

var app = express();

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});
