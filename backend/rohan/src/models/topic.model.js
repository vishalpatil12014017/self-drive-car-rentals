const mongoose=require("mongoose")
const topic_name=new mongoose.Schema({
    topic:{type:String,required:true}
},
{
    versionKey:false,//__v
    timestamps:true// createaat,updated
})
const topic=mongoose.model("topics",topic_name)
module.exports=topic

