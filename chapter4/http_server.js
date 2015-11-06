var http=require("http");
http.createServer(function(req,res){
	req.on("data",function(chunk){ 
		console.log(chunk)
	})
	req.on("end",function(){ 
		console.log("end")
	})
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("<h1>node.js</h1>")
	res.end("<p>hello world</p>") 
}).listen(3000);