"use strict";

var express = require('express');

var cors = require('cors');

var mongoose = require('mongoose');

require('dotenv').config();

var app = express(); // const port = process.env.PORT || 5000;

app.set('port', process.env.PORT || 5000);
console.log("++++++++++++++++" + app.get('port'));
app.use(cors());
app.use(express.json());
app.use(express["static"]('./client/build'));
var uri = process.env.ATLAS_URI;
app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
mongoose.connect(uri);
var connection = mongoose.connection;
connection.once('open', function () {
  console.log("MongoDB database connection established sucessfully.");
});

var usersRouter = require('./routes/users');

app.use('/users', usersRouter);
app.listen(port, function () {
  console.log("Server is running on port: ".concat(port));
});