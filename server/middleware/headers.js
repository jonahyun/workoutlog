
module.exports = function(req,res,next){
	res.header('access-control-allow-origin','*'); //allows server to respond to any requestion from anywhere
	next();
};
