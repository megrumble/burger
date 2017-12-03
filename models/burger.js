var orm = require("./orm.js");

var burger = {
    selectAll: function (table, cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (table, column, burger, cb) {
        orm.insertOne("burgers", column, burger, function (res) {
            cb(res);
        });
    },
    updateOne: function (table, column, updated_val, where_col, where_val, cb)

}