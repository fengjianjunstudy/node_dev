var fs=require("fs")
fs.readFile("chapter4/process1.js","utf-8",function(err,data){ 
	if(err){
		console.log(err) 
	}else{ 
		console.log(data)
	}
})