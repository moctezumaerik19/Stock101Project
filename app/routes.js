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

//These next lines of code connect to the database
//only need one connection for the whole shebang
//do not connect again elsewhere, will crash the user session
db.connect(function(err){
    if(err) throw err;
    console.log("CONNECTED");
});

router.post('/',function(req,res){
        
    console.log("CONNECTED");
    var user1 = req.body.signInName;
    var pass1 = req.body.signInPass;
    var sql = "SELECT * FROM student WHERE username = ? AND password = ?";

    console.log(user1);

    //console.log("TEST");
    db.query(sql,[user1,pass1], function (err, result) {
        if(err) {
            console.log(err); 
            res.json({"error":true});
        }
        else{
            if(result != ""){
                            
                //UNCOMMENT FOR TESTING
                //console.log("IF STATEMENT WORKS");
                //res.json(result);
                            
                res.sendFile(path.join(__dirname, '../StudentDash.html'));
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

function validate() {
    'use strict'
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() == false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
    //if (passin.length === validpass.length) {
    //    for (index = 0; index < passin.length; index++) {
    //        if (passin[index] !== ' ' || validpass[index] !== ' ') {
    //            if (passin[index] !== validpass[index]) {
    //                document.getElementsByName("signupPassword").setCustomValidity("Passwords do not match!");
    //            }
    //        }
    //        else {
    //            document.getElementsByName("signupPassword").setCustomValidity("Passwords cannot contain spaces!");
    //        }
    //    }
    //}
}

router.post('/plswork',function(req,res){
        
    console.log("CONNECTED");
    var userin = req.body.signupName;
    var passin = req.body.signupPassword;
    var validpass = req.body.signupConfirmpass;
    var classin = req.body.signupClassName;
    var sql2 = "INSERT INTO teacher (username, password ) VALUES (?,?)";

    console.log("something is happening at least ????");
    console.log(userin);
    console.log(passin);
    validate();
    //console.log("TEST");

    db.query(sql2, [userin, passin], function (err, result) {
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
    
});

router.post('/plswork2',function(req,res){
        
    console.log("CONNECTED");
    var userin = req.body.stuName;
    var passin = req.body.stuPass;
    var codeT = req.body.bode;
    var sql2 = "INSERT INTO student (username, password, teacherId) VALUES (?,?,?)";

    console.log("something is happening at least ????");
    console.log(userin);
    console.log(passin);
    console.log(codeT);

    //console.log("TEST");
    db.query(sql2,[userin,passin,codeT], function (err, result) {
        if(err) {
            console.log(err); 
            res.json({"error":true});
        }
        else{
            console.log("INPUT WAS INSERTED");

            //UNCOMMENT FOR TESTING
            //console.log(result); 
            res.sendFile(path.join(__dirname, '../Home.html'));
            //res.json(result);      
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
    