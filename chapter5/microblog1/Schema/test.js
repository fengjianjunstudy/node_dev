var mongoose=require("mongoose");

var carSchema=mongoose.Schema({
	detailTitle:String,
	creatTime:String,
	conHtml:String,
	meta:{
		createAt:{
			type:Date,
			default:Date.now()
		},
		updateAt:{
			type:Date,
			default:Date.now()
		}
	}

});
carSchema.pre("save",function(next){ 
	if(this.isNew){ 
		this.meta.createAt=this.meta.updateAt=Date.now();
	}else{ 
		this.meta.updateAt=Date.now();
	}
	next();
})

carSchema.statics={
	fetch:function(cb){ 
		return this.find({}).sort("meta.updateAt").exec(cb);
	},
	findById:function(cb){
		return this.findOne({_id:id}).exec(cb)
	}
};
module.exports=carSchema;