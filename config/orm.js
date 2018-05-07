var connection = require("../config/connection.js");

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
        console.log("orm.js: insertOne: tableInsert: ", tableInsert);
        console.log("orm.js: insertOne: colName: ", colName);
        console.log("orm.js: insertOne: colEaten: ", colEaten);
        console.log("orm.js: insertOne: valName: ", valName);
        console.log("orm.js: insertOne: valEaten: ", valEaten);
        // console.log("orm.js: insertOne: colName.burgerNameCol: ", colName.burgerNameCol);
        // console.log("orm.js: insertOne: colName.burgerEatenCol: ", colName.burgerEatenCol);
        // console.log("orm.js: insertOne: colEaten.burgerNameVal: ", colEaten.burgerNameVal);
        // console.log("orm.js: insertOne: colEaten.burgerEatenVal: ", colEaten.burgerEatenVal);
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        // connection.query(queryString, [tableInsert, colName, colEaten, valName, valEaten], function (err, result) {
        // var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??, false)";
        connection.query(queryString, [tableInsert, /*colName.burgerNameCol, colName.burgerEatenCol, colEaten.burgerNameVal, colEaten.burgerEatenVal*/ colName, colEaten, valName, valEaten], function(err, result) {
            if (err) {
                console.log(err);
                throw err;
            }

            console.log(result);
            cb(result);
        });
    },
    // UPDATE ?? SET ?? = ? WHERE ?? = ?
    updateOne: function (tableUpdate, colUpdate, valUpdate, colWhere, valWhere, cb) {
        // console.log("tableUpdate: ", tableUpdate);
        console.log("colUpdate: ", colUpdate);
        console.log("valUpdate: ", valUpdate);
        // console.log("colWhere: ", colWhere);
        console.log("valWhere: ", valWhere);
        if (!isNaN(valWhere)) {
            console.log("valWhere is a number");
        }
        else {
            console.log("valWhere is not a number");
        }
        // console.log("var type of valWhere: ", valWhere.typeOf());
        // console.log("cb: ", cb.toString());
        // var queryString = "UPDATE ?? SET ?? = ? WHERE ? = ?";
        // console.log("queryString: " + queryString.substring(0, 7) + tableUpdate + queryString.substring(9, 14) + colUpdate + queryString.substring(16, 19) + valUpdate);
        // var queryString = "UPDATE burgers SET devoured = " + valUpdate + " WHERE id = " + valWhere;
        var updateColumn = colUpdate + " = " + valUpdate;
        console.log("updateColumn: ", updateColumn);
        var whereVal = -9999;
        whereVal = valWhere;
        console.log("whereVal: ", valWhere);
        var updateWhere = colWhere + " = " + valWhere;
        console.log("updateWhere: ", updateWhere);
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?"; // + valWhere;
        // connection.query(queryString, [tableUpdate, colUpdate, valUpdate, colWhere, valWhere], function (err, result) {
        connection.query(queryString, /*[,,valUpdate,, valWhere]*/ /*[updateColumn, */valWhere/*.valueOf()]*/, function (err, result) {
            // console.log("queryString: " + connection.query(queryString, [tableUpdate, colUpdate, valUpdate, colWhere, valWhere]));
            // console.log("orm.js: updateOne: connection.query(queryString...): query length: " + connection.query.length);
            if (err) {
                console.log(err);
                throw err;
            }

            else {
                console.log("orm.js: updateOne: connection.query(queryString...): result: \n", result);
                connection.query("SELECT * FROM burgers", function (err, result) {
                    if (err) {
                        console.log(err);
                        throw err;
                    }

                    console.log("result of full select after update before update's cb(result) fires: \n", result);
                });
            }
            // console.log("updated cb: ", cb);
            // console.log("updated cb(result: " + cb(result));
            cb(result);
        });
    }
};
module.exports = orm;