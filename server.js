var express = require('express');
//var mysql = require('mysql'); // see line 20 for reasoning while i commented this line out
var app = express();
var axios = require('axios');
var cors = require('cors');
const path = require('path');

module.exports = app;

app.set('port', process.env.PORT || 3001);
//
//lines 12 and 13 were commented out but trying them out to see if the home page works
var router = require('./app/routes');
app.use('/', router);

app.use(express.json());
app.use(cors());

//line 19 was commented out by trying it out to see if the home page works
app.use(express.static(__dirname + '/public'));

//commented out the db connection here because I made a separate connection js file so that its easier to call in other js files
//var db = mysql.createConnection({host: "stock101.mysql.database.azure.com", user: "SoftwareProject@stock101", password: "Stock101", database: "main", port: "3306"});

//app.post('/register', (req, res) => {

//    const username = req.body.username;
//    const password = req.body.password;

//    db.query(
//        "INSERT INTO main.student (username, password) VALUES (?, ?)",
//        [username, password], 
//        (err, result) =>{
//            console.log(err);
//        }
//    );
//});
//uncommented the next 3 lines of code, lets see if it works
var server = app.listen(app.get('port'), function (){
    console.log('Express server successfully started and is listening on port:' + server.address().port);
});

//commenting this next line out to see if home page works
//app.use(express.static(path.join(__dirname, '/client/build')));
//changed(__dirname, '/client/build', index.html) to what is now showing in line 46
//just gonna comment the whole thing out
//app.get('/', function(req, res){
//    res.sendFile(path.join(__dirname, home.html));
//});

//app.listen(3001, () => {
//    console.log('we are goin');
//});
