var http=require("http");
var querystring=require("querystring");
var contents=querystring.stringify({
	"wd":"node"
});
var options={ 
	host:"www.baidu.com",
	path:"/s?wd=node",
	method:"post",
	headers:{ 
		"Content-Type":"text/javascript; charset=gbk",
		"Content-Length":contents.length
	}
}
var req=http.request(options,function(res){ 
	res.setEncoding("utf-8");
	res.on("data",function(chunk){ 
		console.log(chunk)
	})
})
//req.write(contents)
req.end()