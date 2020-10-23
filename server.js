var express = require('express');
var app = express();

//app.get('/', function (req, res) {
//    console.log('Send message on get request');
//    res.send('welcome to the home page lol');
//    
//});

app.set('port', process.env.PORT || 8080);

var router = require('./app/routes');
app.use('/', router);

app.use(express.static(__dirname + '/public'));

var server = app.listen(app.get('port'), function (){
    console.log('Express server successfully started and is listening on port:' + server.address().port);
});