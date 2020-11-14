var express = require('express');
var path = require('path');
var router = express.Router();
module.exports = router;

router.get('/Stock101Project/app/signup.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/signup.js'));
});

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../Home.html'));
});
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
    