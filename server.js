var express = require("express");
var bodyParser = require("body-parser");
// var expressHandleBars = require("express-handlebars");
// var mysql = require("mysql");
var routes = require("../burger/controllers/burger_controller.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

app.listen(PORT, function() {
    console.log("Currently listening at port: " + PORT);
});