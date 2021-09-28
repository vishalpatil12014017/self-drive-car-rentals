const mongoose=require("mongoose")
const evaluationShema=new mongoose.Schema({
    date_of_evaluation:{type:String,required:true},
    body:{type:String,required:true},
    instructor:{type:mongoose.Schema.Types.ObjectId, ref:"users",required:true},
    topic_name:{type:mongoose.Schema.Types.ObjectId, ref:"topics",required:true}
},
{
    versionKey:false,//__v
    timestamps:true// createaat,updated
})
const evaluation=mongoose.model("evolautions",evaluationShema)
module.exports=evaluation

