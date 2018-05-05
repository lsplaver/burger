var connection = require("../config/connection,js");

var orm = {
    selectAll: function (tableSelect, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableSelect], function (err, result) {
            if (err) {
                console.log(err);
                throw err;
            }

            console.log(result);
            cb(result);
        });
    },
    insertOne: function (tableInsert, colName, colEaten, valName, valEaten, cb) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES  (??, ??)";
        connection.query(queryString, [tableInsert, colName, colEaten, valName, valEaten], function (err, result) {
            if (err) {
                console.log(err);
                throw err;
            }

            console.log(result);
            cb(result);
        });
    },
    updateOne: function(tableUpdate, colUpdate, valUpdate, colWhere, valWhere, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableUpdate, colUpdate, valUpdate, colWhere, valWhere], function (err, result) {
            if (err) {
                console.log(err);
                throw err;
            }

            console.log(result);
            cb(result);
        });
    }
};
module.exports = orm;