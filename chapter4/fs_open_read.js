var fs=require("fs");
fs.open("chapter4/fs_open.js","r",function(err,fd){
	if(err){ 
		console.log(err);
		return;
	}
	/*var buf=new Buffer(8);
	fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){ 
		if(err){ 
			console.log(err);
		}
		console.log("bytesRead:"+bytesRead);
		console.log(buffer)
	})*/
	fs.readdir("../node_dev",function(err,files){ 
		if(err){ 
			console.log(err)
			return;
		}
		for(var i=0;i<files.length;i++){ 
			console.log(files[i])
			fs.stat(files[i],function(err,stats){
				console.log(stats)
			})
		}
	})
})
//unlink删除文件 fs.unlink("chapter4/process1.js")