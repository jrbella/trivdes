var express = require('express');
var database = require('./database.js');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true }) );
var moment = require('moment');
moment().format();  //installed by jeff 4/4/2016

//Set up to render the html correctly from the html folder
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname.replace('backend', 'frontend') + '/html');
app.use(express.static(__dirname.replace('backend', 'frontend')));

app.get('/', function(req,res){
  console.log('app / requested');
  return res.status(200).send("hello world");
});

app.get('/aboutus', function(req,res){
     console.log('app /aboutus');
     return res.status(200).send("/aboutus.html");
});


app.listen(port, function(){
  console.log("Application is running:");
  console.log("Listening on " + port);
});
