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
//objSub.sayHello()
objSub.sayName()
console.log(objSub)
console.log(util.inspect(objBase))
console.log(util.inspect(objBase,true))
var arr=[1,2,3]
console.log(util.isArray(arr))