const mongoose=require('mongoose')

const CourseSchema=new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     day:{
         type:String,
         required:true,
     },
     date:{
         type:String,
         required:true,
     },
     start_time:{
        type:String,
        required:true,
     },
     duration:{
         type:Number,
     },
     capacity: {
        type: Number,
        required: true,
    },
    regCount: {
        type: Number,
        default: 0,
    },
     })
    
     const Course=mongoose.model("course", CourseSchema);
     module.exports=Course