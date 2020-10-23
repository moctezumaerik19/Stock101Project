var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('Send message on get request');
    res.send('Hello full-stack development!');
});

app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function (){
    console.log('Express server listening on port:' + server.address().port);
});