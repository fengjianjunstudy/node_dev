var fs=require("fs");
fs.readFile("app.js","utf-8",function(err,data){ 
	if(err){
		console.error(err)
	}else{ 
		console.log(data)
	}
})
/*var data=fs.readFileSync("app.js","utf-8")
console.log(data)*/