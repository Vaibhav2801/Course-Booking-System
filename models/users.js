const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        reuired: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    status:{
        type:String,  
         default:"WAITING"
    },
    courseid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'course',
        required:true
    }},
    {
        timestamps:true
    })
    
    const User=mongoose.model("user", UserSchema);
    module.exports=User