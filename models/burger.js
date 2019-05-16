var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    // we need the name and the callback
    insert: function(name, cb){
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
    },
    update: function(name, cb){
        orm.updateOne("burgers", { devoured: true}, "id=" + name , cb);
    }
}

module.exports = burger;