var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var burgerOutputObject = {
            burgers: data
        };

        console.log(burgerOutputObject);

        res.render("index", burgerOutputObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("name", "eaten", req.body.name, req.body.eaten, function(result) {
        res.json(affectedRows);
    });
});

router.post("/api/burger/:id", function (req, res) {
    burger.updateOne("eaten", req.body.eaten, "id", req.body.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            return res.status(200).end();
        }
    });
});

module.exports = router;