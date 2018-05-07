var orm = require("../config/orm.js"); //"../models/burger.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    insertOne: function (tableInsert, burgerName, burgerEaten, nameVal, eatenVal, cb) {
        console.log("burger.js: insertOne: tableInsert: ", tableInsert);
        // console.log("burger.js: insertOne: burgerName: ", burgerName);
        // console.log("burger.js: insertOne: burgerEaten: ", burgerEaten);
        var col = {burgerNameCol: burgerName, burgerEatenCol: burgerEaten};
        console.log("burger.js: insertOne: col: ", col);
        // console.log("burger.js: insertOne: nameVal: ", nameVal);
        // console.log("burger.js: insertOne: eatenVal: ", eatenVal);
        var val = {burgerNameVal: nameVal, burgerEatenVal: eatenVal};
        console.log("burger.js: insertOne: val: ", val);
        orm.insertOne(/*"burgers",  "burger_name", "devoured",*/ tableInsert, /*burgerName, nameVal, burgerEaten, eatenVal,*/ col.burgerNameCol, col.burgerEatenCol, val.burgerNameVal, val.burgerEatenVal, function (res) {
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