var orm = require("../config/orm.js"); //"../models/burger.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (burgerName, burgerEaten, nameVal, eatenVal, cb) {
        orm.insertOne("burgers",  /*"burger_name", "devoured",*/ burgerName, burgerEaten, nameVal, eatenVal, function (res) {
            cb(res);
        });
    },
    updateOne: function (tableUpdate, burgerEaten, eatenVal, burgerId, id, cb) {
        console.log("burger.js: updateOne: tableUpdate: ", tableUpdate);
        console.log("burger.js: updateOne: burgerEaten: ", burgerEaten);
        console.log("burger.js: updateOne: eatenVal: ", eatenVal);
        console.log("burger.js: updateOne: burgerId: ", burgerId);
        console.log("burger.js: updateOne: id: ", id);
        orm.updateOne(/*"burgers"*/tableUpdate, /*"devoured"*/ burgerEaten, eatenVal, /*"id"*/ burgerId, id, function (res) {
            cb(res);
        });
        console.log("burger.js: orm.updateOne: tableUpdate: ", tableUpdate);
        console.log("burger.js: orm.updateOne: burgerEaten: ", burgerEaten);
        console.log("burger.js: orm.updateOne: eatenVal: ", eatenVal);
        console.log("burger.js: orm.updateOne: burgerId: ", burgerId);
        console.log("burger.js: orm.updateOne: id: ", id);
    }
};

module.exports = burger;