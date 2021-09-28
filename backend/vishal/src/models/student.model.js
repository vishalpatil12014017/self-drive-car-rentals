const mongoose=require("mongoose")
const studentShema=new mongoose.Schema({
    roll_id:{type:Number,required:true},
    current_batch:{type:String,required:true},
    evaluation:{type:mongoose.Schema.Types.ObjectId, ref:"evaluations",required:true},
    marks:{type:Number,required:false}
},
{  versionKey:false,//__v
    timestamps:true// createaat,updated 
})
const Student=mongoose.model("student",studentShema)
module.exports=Student