var express = require('express');
var app = express();
var bodyParser = require('body-parser'); 
//help the server parse out incoming requests that are easier to work with

var sequelize = require('./db.js');
var User = sequelize.import('./models/user');

User.sync(); // Warning:  sync({force:true}) will DROP the table; 

app.use(bodyParser.json());
app.use(require('./middleware/headers'));



//test api
app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});




app.post('/api/user', function(req,res){

	//when we post to api user, it will want a user object in the body
	var username = req.body.user.username;
	var pass = req.body.user.password;
	
	//Match the model we create above
	//Sequelize - take the user model and go out to the db and create this
	User.create({
		username: username,
		passwordhash: ""
	}).then(
		//Sequelize is going to return the object it created from db
		function createSuccess(user){

			//successful get this:
			res.json({
				user: user,
				message: 'create'
			});
		},
		function createError(err){
			res.send(500, err.message);
		}
	);
});

