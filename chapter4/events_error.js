var events=require("events");
var emitter=new events.EventEmitter();
emitter.on("error",function(err){ 
	console.log(err)
})
emitter.emit("error")
emitter.on("someEvent",function(arg1,arg2){ 
	console.log(arg1+" "+arg2+"!")
})
var util=require("util")
function Base(){ 
	this.name="xiaohua";
	this.base=1991;
	this.sayHello=function(){ 
		console.log(this.base+"hello")
	}
}
Base.prototype.sayName=function(){ 
	console.log(this.name)
}
function Sub(){
	this.name="xiaohei"
}
util.inherits(Sub,Base)
var objBase=new Base();
objBase.sayHello()
objBase.sayName()
console.log(objBase)
var objSub=new Sub();
objSub.sayHello()
objSub.sayName()