var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var burgerOutputObject = {
            burgers: data
        };
        console.log("get req.body: " + req.body.burgers);
        // console.log("data: " + json.data.toString()); // req.json(data)); // res.json(data));
        console.log(burgerOutputObject);
        console.log("req.body.eaten: " + req.body.devoured);
        console.log("data.devoured: " + burgerOutputObject.burgers.eaten); //data.devoured);

        res.render("index", burgerOutputObject);
    });
});

router.post("/api/burgers", function (req, res) {
    // burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    console.log("burger_controller.js: router.post: req.body.burger_name: ", req.body.burger_name);
    // console.log("burger_controller.js: router.post: req.")
    burger.insertOne("burgers", "burger_name", "devoured", req.body.burger_name, false, function (result) {
        // res.json(affectedRows);
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    // var temp = req.body.toString();
    var temp = {};
    temp = req.body;
    console.log("req.body: \n" + temp.toString());
    console.log("devoured: " + req.body.devoured);
    console.log("id: " + req.params.id);
    burger.updateOne("burgers", "devoured", req.body.devoured, "id", req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        }
        else {
            return res.status(200).end();
        }
    });
});

module.exports = router;