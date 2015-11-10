var express=require("express");
var router=express.Router();
router.get("/",function(req,res,next){
    res.render("reg",{title:"用户注册"});
    next();
})
module.exports=router;