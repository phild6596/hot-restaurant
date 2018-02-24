// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname + '/tables.html'));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname + '/reserve.html'));
});




app.post("/api", function(req, res) {

});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});