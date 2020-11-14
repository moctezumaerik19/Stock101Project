var express = require('express');
var path = require('path');
var router = express.Router();
var mysql = require('mysql');
var db = mysql.createConnection({host: "stock101.mysql.database.azure.com", user: "SoftwareProject@stock101", password: "Stock101", database: "main", port: "3306"});
var app = require("../server");
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

//uncomment this block of code to test serverside database connection
//db.connect(function(err){
//    if(err) throw err;
//    console.log("SOMETHING IS HAPPENING? I HOPE");
//});

router.post('/',function(req,res){
    db.connect(function(err) {
        console.log("CONNECTING...");
        if(err) throw err;
            else {
                console.log("CONNECTED");
                var user1 =  req.body.signInName;
                var pass1 = req.body.signInPass;
                var sql = "SELECT * FROM student WHERE username = ? AND password = ?";

                console.log(user1);

                console.log("TEST");

                db.query(sql,[user1,pass1], function (err, result) {
                    if(err) {
                        console.log(err); 
                        res.json({"error":true});
                    }
                    else { 
                        console.log(result); 
                        res.sendFile(path.join(__dirname, '../StudentDash.html'));
                        //res.json(result); 
                    }
                });
               
            }
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
    

router.get('/TeacherSection.html',function(req, res){
    res.sendFile(path.join(__dirname, '../TeacherSection.html'));
})


router.get('/WhatsStock.html',function(req, res){
    res.sendFile(path.join(__dirname, '../WhatsStock.html'));
})



router.get('/quizOne.html',function(req, res){
    res.sendFile(path.join(__dirname, '../quizOne.html'));
})
     

router.get('/Score.html',function(req, res){
    res.sendFile(path.join(__dirname, '../Score.html'));
})
    