var express=require("express");
var cookieParser = require('cookie-parser')
var router=new express.Router();
router.post("/",function(req,res,next){
	var reqBody=req.body;
	var pwd=reqBody["password"];
	var pwd1=reqBody["password-repeat"];
	if(pwd != pwd1){
		req.flash('error', '两次输入的口令不一致');
		return res.redirect("/reg")
	}

	res.send("ddd")
})
module.exports = router;