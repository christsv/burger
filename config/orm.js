// Importing MySQL connection
var connection = require("../config/connection.js");

function printQuestionMarks(num){
    var arr =[];
    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob){
    // column1=value, column2=value2...
    var arr=[];
    for(var key in ob){
        arr.push(key + '=' + ob[key]);
    }
    return arr.toString();
}

var orm = {
    // load all the burgers in the database
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table;
        console.log(queryString);
        connection.query(queryString, function(err, result){
            if (err) { 
                throw err;
            }
            cb(result);
        })
    },
    // for creating a burger we need the table, the column=value and the callback
    insertOne: function(table, cols, vals, cb){
    // INSERT INTO burgers ()
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);
        connection.query(queryString, vals, function(err, result){
            if (err){
                throw err;
            }
            cb(result);
        })
    },
    // here we use objColVals (i.e {name: chris, devoured: true})
    updateOne: function(table, obj, condition, cb){
    // UPDATE products SET ? WHERE ? => UPDATE products SET {quantity: 100} WHERE {flavor: Rocky} 
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(obj);
        queryString += " WHERE ";
        queryString += condition;
        console.log(queryString);

        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
        
            cb(result);
        });
    } 
}

module.exports = orm;