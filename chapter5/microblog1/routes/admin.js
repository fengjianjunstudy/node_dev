var express=require("express");
var admin=express();
admin.on("mount",function(parent){ 
	//console.log(parent)
})
admin.all("*",function(req,res,next){
	console.log("all");
	next();
})
admin.get("/",function(req,res,next){
	res.send("hello world!")
})
module.exports=admin;