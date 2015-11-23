var express=require("express");
var mongoose=require("mongoose");
var Car=require("../models/test");
mongoose.connect("mongodb://localhost:3000/test");
var app=express();
app.get("/*/:id",function(req,res,next){ 
	Car.fetch(function(err,data){ 
		if(err){
			console.log(err)
		}else{
			var id=req.params.id;
			Car.findById(id,function(err,data){
				res.render("detail",{title:title,carType:car_type,carDetail:data})
			})
		}
	});
	next();
	//console.log(Car)
	//var car_detail={detailTitle:"2015款 1.6L 手动智尚型",conHtml:"<p>单从哈弗H8的动力系统层面来看，它2.0T直喷增压发动机和6挡手自一体变速箱确实够主流，我们对这套系统同样也抱有不小的期望，聊完了主观的驾驶感受，我们将它的各方面性能量化处理，看看哈弗H8的成绩如何。</p>",creatTime:"2015/11/23"}
	/*var path=req.path;
	var car_type=path.split("/")[1];
	var title=car_type+"详情页"
	res.render("detail",{title:title,carType:car_type,carDetail:data})*/
});
module.exports=app;