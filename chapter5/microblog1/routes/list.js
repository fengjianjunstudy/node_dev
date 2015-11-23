var express=require("express");
var bodyParser=require("body-parser");
var app=express();
app.get("/:id",function(req,res,next){ 
	var lists=[{id:"123",name:"2015款 1.6L 手动智尚型",carImg:"../images/4.jpg",size:"4358*1823*1630",mainOil:"8.7L/100km(4人均值)",construction:"SUV",engine:"1.6L 122马力 L4",Transmission:"6挡手自一体",composite:"8L/100km(4人均值)",lowerPrice:"7.98 万元",factoryPrice:"首付2.39万元（24期）",loanPrice:"首付2.39万元（24期）",allPrice:"9.24万元"},{id:"321",name:"2015款 1.6L 手动智尚型",size:"4358*1823*1630",carImg:"../images/4.jpg",mainOil:"8.7L/100km(4人均值)",construction:"SUV",engine:"1.6L 122马力 L4",Transmission:"6挡手自一体",composite:"8L/100km(4人均值)",lowerPrice:"7.98 万元",factoryPrice:"首付2.39万元（24期）",loanPrice:"首付2.39万元（24期）",allPrice:"9.24万元"}];
	res.render('list', { title: 'M8',lists:lists,carType:req.params.id});
})
module.exports=app;