var express=require("express");
var app=express();
app.get("/",function(req,res,next){ 
	res.render("detail")
})
module.exports=app;