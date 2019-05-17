require("dotenv").config();
var keys = require("../keys"); // keys.keys => password

var mysql = require("mysql");

// JawsdB heroku so if theres a jawsdb connect to it. if not go to the local one
var connection;
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{ 
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: keys.keys,
        database: "burgers_db"
    })

}





connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id: " + connection.threadId + "\n");
});

module.exports = connection;