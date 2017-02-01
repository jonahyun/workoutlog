
module.exports = function(req,res,next){
	res.header('access-control-allow-origin','*'); //allows server to respond to any requestion from anywhere
	res.header('access-control-allow-methods', 'GET,POST,PUT,DELETE');
	res.header('access-control-allow-headers', 'Origin,X-Requested-With,Content-Type,Accept, Authorization');

	next();
};
