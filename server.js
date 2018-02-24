// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var app = express();
var PORT = 8080;
var reservations = [];
var waitList = [];

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

app.get("/api/tables", function(req, res) {
  
  res.send(reservations);
  return reservations; 
});



app.post("/api/tables", function(req, res) {

  var newReservation = req.body;

  console.log(newReservation);

  // We then add the json the user sent to the character array
  if (reservations.length < 2) {
    reservations.push(newReservation);
  } else {
    waitList.push(newReservation);
  }

  // We then display the JSON to the users
  res.json(newReservation);
});

app.get("/api/waitlist", function (req, res){
  res.send(waitList);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
