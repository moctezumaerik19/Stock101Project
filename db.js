
var mysql = require('mysql');


var db = mysql.createConnection({host: "stock101.mysql.database.azure.com", user: "SoftwareProject@stock101", password: "Stock101", database: "main", port: "3306"});


//TEMPLATE ON HOW TO CALL QUERIES
//THE FOLLOWING CODE WORKS!!!!!!!!!!!!!!!!!!!
//db.connect(function(err) {
//    if (err) throw err;
//    db.query("SELECT * FROM student", function (err, result, fields) {
//      if (err) throw err;
//      console.log(result);
//    });
//  });

module.exports = db;
