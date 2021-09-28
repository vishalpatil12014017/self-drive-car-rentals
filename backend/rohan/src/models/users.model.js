const mongoose=require("mongoose")
// step1 creat collection
const userSchema=new mongoose.Schema({
    first_name:{type:String,required:true},
    last_name:{type:String,required:false},
    date_of_birth:{type:String,required:true},
    gender:{type:String,required:true}
})

//stp2 conect schema to user collectin
const User=mongoose.model("users",userSchema); //users
module.exports=User