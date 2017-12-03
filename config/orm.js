var connection = require('./connection.js');

// Object Relational Mapper (ORM)

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (table, column, burger, cb) {
        var queryString = "insert into ?? (??) values (??);";
        console.log(queryString);
        connection.query(queryString, [table, column, burger], function (err, result) {
            console.log(result);
        });
    },
    updateOne: function (table, column, updated_val, where_col, where_val, cb) {
        var queryString = "update ?? set ??=?? where ??=??;";

        connection.query(queryString, [table, column, updated_val, where_col, where_val], function (err, result) {
            console.log(result);
        });
    }
};

module.exports = orm;