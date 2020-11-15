//
//
//EVERYTHING THAT WAS COMMENTED OUT WAS DUE TO IT NOT BEING NEEDED.
//EVERYTHING WAS MOVED TO ROUTES.JS
//UNCOMMENT OUT THE FUNCTIONS FOR DIAGNOSTIC MEANS
//
//
//
//var db = require('../db');
//var $ =require('jquery');
//var app = require('../server');

//THE FOLLOWING CODE WORKS DO NOT DELETE
//USE AS A TEMPLATE WHEN SIGN UPS OCCUR
//var sql = "INSERT INTO student (username, password ) VALUES ('testtest', 'pleasework')";
//db.query(sql, function (err, result) {
//  if (err) throw err;
//  console.log("1 record inserted");
//});


//function plswork(a) {
// alert("POOP" + a);
//}
//var logname;
//var logpass;
      
//function myFunction(name,pass) {

//    alert("BUTTON PRESSED");
//   logname = name;
//    logpass = pass;
//    select();
    
    //at least it gets the values pls kill me
    //alert(name + " " + pass);
    //uncomment to test for functionality
    //alert("POOOPOPOPP");
//}

//function signup(firstname, lastname, email, pass, confirmpass) {
//   alert("button pressed\nFunction called: values passed: " + firstname + ' ' + lastname + ' ' + email + ' ' + pass + ' ' + confirmpass);
//}
//function signup() {
//    var firstname = document.forms["signupForm"]["signupName"].value;
// //   var lastname = document.forms["signupForm"]["signupLastName"].value;
//    var pass = document.forms["signupForm"]["signupPassword"].value;
//    var confirmpass = document.forms["signupForm"]["signupConfirmpass"].value;
//    alert("button pressed\nFunction called: values passed: " + firstname + ' ' + pass + ' ' + confirmpass);
//    return false;
//}
function validate() {
    if (document.getElementsByName('signupPassword').value == document.getElementsByName('confirmpass').value) {
        document.getElementById('validpass').style.color = 'green';
        document.getElementById('validpass').innerHTML = 'Valid';
    }
    else {
        document.getElementById('validpass').style.color = 'red';
        document.getElementById('validpass').innerHTML = 'passwords do not match';
    }
}
//function select(){
//
//    alert("FUNCTION CALLED: VALUES PASSED: " + logname + " " + logpass);
//    
    //app.post('/VIEW', (req, res) => {

    //console.log("POST WAS ENTERED");


    //db.query(
    //    "SELECT * FROM student)", 
    //    (err, result) =>{
    //        console.log(err);
    //    }
    //);
    //});

    //var sql = "SELECT * FROM 'student' WHERE 'username' = " + db.escape(logname);
    //var sql = "SELECT * FROM student WHERE username = 'testtest'";
    //db.query(sql,function(err,result){
    //    if (err) throw err;
    //    console.log("1 record selected??????");
    //    alert("SOMETHING HAPPENED???");
    //});
//}




//app.post('/VIEW', function(req,res){
//    db.serialize(()=>{
//      db.each('SELECT * FROM student WHERE username =?', [req.body.signInName], function(err,result){     //db.each() is only one which is funtioning while reading data from the DB
//        if(err){
//          res.send("Error encountered while displaying");
//          return console.error(err.message);
//        }
//        //res.send(` ID: ${row.ID},    Name: ${row.NAME}`);
//        console.log("Entry displayed successfully");
//      });
//    });
//  });