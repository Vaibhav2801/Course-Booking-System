const express=require('express')
const router=express.Router()
const User=require('../models/users')
const Course=require('../models/courses')

// @route POST users/register
// @desc  Register user 
// @access Public
router.post('/register',(req,res)=>{
    User.findOne({ email: req.body.email }).then(user => {
        if (user)   return res.status(400).json('Email already exists');
         else {
            const newUser=new User({
                name:req.body.name,
                email:req.body.email,
                courseid:req.body.courseid
            })
           Course.findById({_id:req.body.courseid})
           .then(course => {
               if(course.regCount===course.capacity){
                newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err))
               }
               else {
                   course.regCount+=1
                   //console.log(course)
                   course.save()
                   .then(user => res.json(user))
                   .catch(err => console.log(err))
                   newUser.status="CONFIRM"
                   newUser
                   .save()
                   .then(user => res.json(user))
                   .catch(err => console.log(err))
               }
           })
        }
    })
})

//@route DELETE /users/registration
//@desc  DELETE user
//@access public

router.delete('/slot/:_id',(req,res)=>{
    User.findOneAndDelete({_id:req.params._id})
    .then(user => {
        const x=Date.now.toString()
        const y;
        Course.findById({_id:user.courseid})
        .then(course=>{
            course.regCount-=1
            y=Date.parse(course.start_time)-Date.parse(x);
            course.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))
        })

        if(y>=1800000){
        User.findOne({status:"WAITING",courseid:user.courseid})
        .sort({createdAt:1})
        .then(user=>{
            user.status="CONFIRM"
            user.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))

            Course.findById({_id:user.courseid})
            .then(course=>{
                course.regCount+=1
                course.save()
                .then(user => res.json(user))
                .catch(err => console.log(err))
            })
        })
        res.status(204).json(user1);
    }
    })
    .catch(err =>  res.status(404).json(err))

    

})



module.exports=router