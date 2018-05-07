var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableSelect, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableSelect], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (tableInsert, colName, colEaten, valName, valEaten, cb) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, [tableInsert, colName, colEaten, valName, valEaten], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (tableUpdate, colUpdate, valUpdate, colWhere, valWhere, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
        connection.query(queryString, valWhere, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};
module.exports = orm;