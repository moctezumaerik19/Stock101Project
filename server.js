var express = require('express');
var mysql = require('mysql');
var app = express();
var axios = require('axios');
var cors = require('cors');
const path = require('path');


app.set('port', process.env.PORT || 3001);

//var router = require('./app/routes');
//app.use('/', router);

app.use(express.json());
app.use(cors());

//app.use(express.static(__dirname + '/public'));

var db = mysql.createConnection({host: "stock101.mysql.database.azure.com", user: "SoftwareProject@stock101", password: "Stock101", database: "main", port: "3306"});

app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO main.student (username, password) VALUES (?, ?)",
        [username, password], 
        (err, result) =>{
            console.log(err);
        }
    );
});

//var server = app.listen(app.get('port'), function (){
//    console.log('Express server successfully started and is listening on port:' + server.address().port);
//});


app.use(express.static(path.join(__dirname, '/client/build')));
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'clien/build', index.html));
});

app.listen(3001, () => {
    console.log('we are goin');
});
