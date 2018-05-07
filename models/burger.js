var orm = require("../config/orm.js");
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (tableInsert, burgerName, burgerEaten, nameVal, eatenVal, cb) {
        var col = {burgerNameCol: burgerName, burgerEatenCol: burgerEaten};
        var val = {burgerNameVal: nameVal, burgerEatenVal: eatenVal};
        orm.insertOne(tableInsert, col.burgerNameCol, col.burgerEatenCol, val.burgerNameVal, val.burgerEatenVal, function (res) {
            cb(res);
        });
    },
    updateOne: function (tableUpdate, burgerEaten, eatenVal, burgerId, id, cb) {
        orm.updateOne(tableUpdate, burgerEaten, eatenVal, burgerId, id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;