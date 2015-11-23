var mongoose=require("mongoose");
var carSchema=require("../Schema/test");
var car=mongoose.model("car",carSchema)
module.exports=car;