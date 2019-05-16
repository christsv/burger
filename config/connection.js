require("dotenv").config();
var keys = require("../keys"); // keys.keys => password

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: keys.keys,
    database: "burgers_db"
})

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id: " + connection.threadId + "\n");
});

module.exports = connection;