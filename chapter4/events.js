var events=require("events");
var emitter=new events.EventEmitter();
emitter.on("someEvent",function(arg1,arg2){ 
	console.log(arg1+" "+arg2)
})
emitter.on("someEvent",function(arg1,arg2){ 
	console.log(arg1+" "+arg2+"!")
})
setTimeout(function(){
	emitter.emit("someEvent","hello","world")
},1000);
console.log("waiting emitter")