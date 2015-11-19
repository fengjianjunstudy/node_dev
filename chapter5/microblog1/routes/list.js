var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.get("/:id",function(req,res,next){ 
	console.log(req.params.id)
	res.render('list', { title: 'M8'});
})
module.exports=app;