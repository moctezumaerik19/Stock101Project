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
    


