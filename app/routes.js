var express = require('express');
var path = require('path');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({host: "stock101.mysql.database.azure.com", user: "SoftwareProject@stock101", password: "Stock101", database: "main", port: "3306"});
var app = require("../server");

const bcrypt = require('bcrypt');
const saltRounds = 10;



module.exports = router;

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.urlencoded({
    extended: false
 }));
 
app.use(bodyParser.json());

  

router.get('/Stock101Project/app/signup.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/signup.js'));
});


//js files should be routed before this line (????????) just works this way idk



router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../Home.html'));
});

//These next lines of code connect to the database
//only need one connection for the whole shebang
//do not connect again elsewhere, will crash the user session
db.connect(function(err){
    if(err) throw err;
    console.log("CONNECTED");
});

//var currentUser;
router.post('/',function(req,res){
    
    console.log("CONNECTED");
    var user1 = req.body.signInName;
    var pass1 = req.body.signInPass;
    var sql = "SELECT * FROM student WHERE username = ? AND password = ?";
    var sql2 = "SELECT * FROM student WHERE username = ? "
    console.log(user1);
    db.query(sql2,[user1], function (err, result) {
        if(err) {
            console.log(err); 
            res.json({"error":true});
        }
        else{
            if(result != ""){
                
                console.log(result[0].password);
                
                bcrypt.compare(pass1, result[0].password , function(err, isMatch) {
                    console.log(pass1);
                    console.log(result[0].password);
                    console.log("TESTTESTESTESTSET");
                    if (err) {
                      throw err
                    } else if (!isMatch) {
                      console.log("Password doesn't match!")
                      res.sendFile(path.join(__dirname, '../Home.html'));
                    } else {
                      console.log("Password matches!")
                      res.sendFile(path.join(__dirname, '../StudentDash.html'));
                    }
                  })



                //UNCOMMENT FOR TESTING
                //console.log("IF STATEMENT WORKS");
                //res.json(result);
                //currentUser = user1;
            
                //console.log(currentUser);
                //console.log("ABOVE IS CURRENT USER");
                //res.sendFile(path.join(__dirname, '../StudentDash.html'));
            }
            else{
                res.sendFile(path.join(__dirname, '../Home.html'));
                console.log(result);
            }

            //UNCOMMENT FOR TESTING
            //console.log(result); 
            //res.sendFile(path.join(__dirname, '../StudentDash.html'));
            //res.json(result);      
        }
    });  
    
});


router.post('/plswork', function (req, res) {

    console.log("CONNECTED");
    var userin = req.body.signupName;
    var passin = req.body.signupPassword;
    var passcheck = req.body.confirmPass;
    var sql2 = "INSERT INTO teacher (username, password ) VALUES (?,?)";
    var sqlcheck2 = "SELECT username FROM teacher WHERE username =?";

    console.log("something is happening at least ????");
    console.log(userin);
    console.log(passin);

    db.query(sqlcheck2, userin, function (err, result) {
        if (err) {
            console.log(err);
            res.json({ "error": true });
        }
        if (result != "") {
            //CHECKS FOR USERS ALREADY IN DATA BASE
            console.log("username already exists check");
            res.sendFile(path.join(__dirname, '../Home.html'));
        }
        else {

            if (passin != passcheck) {

                //console.log("TEST");
                //alert("PASSWORDS DONT MATCH TRY AGAIN");
                //res.send("PASSWORDS DONT MATCH TRY AGAIN");
                //res.sendFile(path.join(__dirname, '../Home.html'));

            }
            else {

                bcrypt.genSalt(saltRounds, function (err, salt) {
                    if (err) {
                      throw err
                    } else {
                      bcrypt.hash(passin, salt, function(err, hash) {
                        if (err) {
                          throw err
                        } else {
                          console.log(hash);
                          db.query(sql2, [userin, hash], function (err, result) {
                            if (err) {
                                console.log(err);
                                res.json({ "error": true });
                            }
                            else {
                                
                                console.log("INPUT WAS INSERTED");
        
                                //UNCOMMENT FOR TESTING
                                //console.log(result); 
                                res.sendFile(path.join(__dirname, '../Home.html'));
                                //res.json(result);      
                            }
                        });
                        }
                      })
                    }
                });
            }
        }
    });
});

router.post('/plswork2', function (req, res) {

    console.log("CONNECTED");
    var userin = req.body.stuName;
    var passin = req.body.stuPass;
    var codeT = req.body.bode;
    var passcheck2 = req.body.confirmPass2;
    var sql2 = "INSERT INTO student (username, password, teacherId) VALUES (?,?,?)";
    var sqlcheck = "SELECT username FROM student WHERE username = ?";

    console.log("something is happening at least ????");
    console.log(userin);
    console.log(passin);
    console.log(codeT);

    db.query(sqlcheck, userin, function (err, result) {
        if (err) {
            console.log(err);
            res.json({ "error": true });
        }
        if (result != "") {
            //CHECKS FOR USERS ALREADY IN DATA BASE
            console.log("username already exists check");
            res.sendFile(path.join(__dirname, '../Home.html'));
        }
        else {

            if (passin != passcheck2) {
                //CHECKS FOR MATCHING PASSWORDS
                //console.log("TEST");
                //alert("PASSWORDS DONT MATCH TRY AGAIN");
                //res.send("PASSWORDS DONT MATCH TRY AGAIN");
                res.sendFile(path.join(__dirname, '../Home.html'));

            }

            else {

                bcrypt.genSalt(saltRounds, function (err, salt) {
                    if (err) {
                      throw err
                    } else {
                      bcrypt.hash(passin, salt, function(err, hash) {
                        if (err) {
                          throw err
                        } else {

                          console.log(hash)

                          db.query(sql2, [userin, hash, codeT], function (err, result) {
                            if (err) {
                                console.log(err);
                                res.json({ "error": true });
                            }
                            else {
        
                                console.log("INPUT WAS INSERTED");
        
                                //UNCOMMENT FOR TESTING
                                //console.log(result); 
                                res.sendFile(path.join(__dirname, '../Home.html'));
                                //res.json(result);      
                            }
                        });
                        }
                      });
                    }
                });
            }
        }
    });
});




router.post('/getscore',function(req,res){
    console.log("TEST TO SEE IF QUIZ INPUT IS ROUTED CORRECTLY");
    var grade = req.body.score99;
    var userCookie = req.body.Uname;
    var sqlGrade = "UPDATE student SET progress = ? WHERE username = ?"


    console.log(grade);
    db.query(sqlGrade, [grade,userCookie], function (err, result) {
        if (err) {
            console.log(err);
            res.json({ "error": true });
        }
        console.log("SCORE WAS INSERTED");
        res.sendFile(path.join(__dirname, '../StudentDash.html'));
    });

});




//html files should be routed after this line (JUST WORKS IDK WHY)

router.get('/aboutus.html',function(req, res){
    res.sendFile(path.join(__dirname, '../aboutus.html'));
})

router.get('/Home.html',function(req, res){
    res.sendFile(path.join(__dirname, '../Home.html'));
})
    

router.get('/StudentDash.html',function(req, res){
    res.sendFile(path.join(__dirname, '../StudentDash.html'));
})
    
router.get('/TeacherDash.html',function(req, res){
    res.sendFile(path.join(__dirname, '../TeacherDash.html'));
})

router.get('/TeacherSection.html',function(req, res){
    res.sendFile(path.join(__dirname, '../TeacherSection.html'));
})


router.get('/WhatsStock.html',function(req, res){
    res.sendFile(path.join(__dirname, '../WhatsStock.html'));
})

router.get('/WhatsStockteach.html',function(req, res){
    res.sendFile(path.join(__dirname, '../WhatsStockteach.html'));
})

router.get('/quizOne.html',function(req, res){
    res.sendFile(path.join(__dirname, '../quizOne.html'));
})
    
router.get('/quizOneTeacher.html',function(req, res){
    res.sendFile(path.join(__dirname, '../quizOneTeacher.html'));
})

router.get('/Score.html',function(req, res){
    res.sendFile(path.join(__dirname, '../Score.html'));
})
    
router.get('/teachScore.html',function(req, res){
    res.sendFile(path.join(__dirname, '../teachScore.html'));
})
    