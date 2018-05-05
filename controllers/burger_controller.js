var express = require("express");
var burger = require("../models/burger.js");

var router = require("router");

router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var burgerOutputObject = {
            burgers: data
        };

        console.log(burgerOutputObject);

        res.render("index", burgerOutputObject);
    });
});

