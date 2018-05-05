var orm = require("../models/burger.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(burgerName, burgerEaten, cb) {
        orm.insertOne("burgers", "burger_name", "devoured", burgerNameInsert, burgerEaten, function (res) {
            cb(res);
        });
    },
    updateOne: function(burgerEaten, id, cb) {
        orm.updateOne("burgers", "devoured", burgerEaten, "id", id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;