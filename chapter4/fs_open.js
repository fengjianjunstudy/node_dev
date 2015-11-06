var fs=require("fs");
fs.open("chapter4/process1.js","w",function(err,fd){
	console.log(fd)
})