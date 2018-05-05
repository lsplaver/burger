var orm = require("../models/burger.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(burgerName, burgerEaten, nameVal, eatenVal, cb) {
        orm.insertOne("burgers",  /*"burger_name", "devoured",*/ burgerName, burgerEaten, nameVal, eatenVal, function (res) {
            cb(res);
        });
    },
    updateOne: function(burgerEaten, eatenVal, id, cb) {
        orm.updateOne("burgers", "devoured", eatenVal, "id", id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;