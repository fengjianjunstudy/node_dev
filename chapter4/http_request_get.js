var http=require("http");
var req=http.get({host:"127.0.0.1","port":3000},function(res){ 
	res.setEncoding("utf-8");
	res.on("data",function(data){ 
		console.log(data)
		console.log(res.statusCode)
		console.log(res.httpVersion)
		console.log(res.headers)
		console.log(res.trailers)
	})
	res.on("end",function(){ 
		console.log("request over")
	})
})
/*var req=http.get({host:"127.0.0.1","port":3000});
req.on("response",function(res){ 
	res.setEncoding("utf-8");
	res.on("data",function(data){ 
		console.log(data)
	})
})*/
req.setTimeout(100,function(){ 
	console.log("time out")
	req.abort();
});

