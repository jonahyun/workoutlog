var express=require('express');
var app=express();

// create test api
app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3003,function(){
	console.log("app is listening to 3003");
});