require('dotenv').config();

var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
//help the server parse out incoming requests that are easier to work with

var sequelize = require('./db.js');
var User = sequelize.import('./models/user');

User.sync(); // Warning:  sync({force:true}) will DROP the table; 

app.use(bodyParser.json());
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.use('/api/user', require('./routes/user'));
app.use('/api/login', require('./routes/session'));

//test api
app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});




