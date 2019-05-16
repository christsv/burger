var orm = require("../config/orm.js");

var burger = {
    all: function(){
        orm.selectAll();
    },
    insert: function(){
        orm.insertOne();
    },
    update: function(){
        orm.updateOne();
    }
}

module.exports = burger;