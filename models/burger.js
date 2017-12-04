var orm = require("../config/orm.js");

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
    updateOne: function (objColVals, condition, cb) {
        orm.updateOne("burgers", oblColVals, condition, function (res) {
            cb(res);
        })
    }

};

module.exports = burger