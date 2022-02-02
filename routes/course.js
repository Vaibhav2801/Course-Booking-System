const express=require('express')
const router=express.Router()
const Courses=require('../models/courses')


//@route  POST api/courses/register
//@desc Register Courses
//@access Private
router.post('/register',(req,res)=>{
    Courses.findOne(
        {
            name:req.body.name,
            day:req.body.day,
            date:req.body.date,
            start_time:req.body.start_time
        }).then(course =>{
            if(course){
                return res.status(400).json("Same Course is already registered at that instatnt");
            }
            else {
                const newCourse=new Courses({
                    name:req.body.name,
                    day:req.body.day,
                    date:req.body.date,
                    start_time:req.body.start_time,
                    duration:req.body.duration,
                    capacity:req.body.capacity,
                })
              
                newCourse.save()
                .then(course=> res.json(course))
                .catch(err => console.log(err));
            }
        })
})


module.exports=router