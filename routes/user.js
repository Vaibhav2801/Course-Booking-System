const express=require('express')
const router=express.Router()
const User=require('../models/users')
const Course=require('../models/courses')

// @route POST users/register
// @desc  Register user 
// @access Public
router.post('/register',(req,res)=>{
    User.findOne({ email: req.body.email })
    .then(user => {
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
           .catch(err => console.log(err))
        }
    })
    .catch(err => console.log(err))
})

//@route DELETE /users/registration
//@desc  DELETE user
//@access public

router.delete('/slot/:_id',(req,res)=>{
    var deleteduser
    var totcount,count
    User.findOneAndDelete({_id:req.params._id})
    .then(user => {
         deleteduser=user
        const x=Date.now()
        if(user.status==="CONFIRM"){
        Course.findById({_id:user.courseid})
        .then(course=>{
              const y=Date.parse(course.start_time)
              const z=y-x
            course.regCount-=1
            totcount=course.capacity
            count=course.regCount
            course.save()
            .then(course => res.json(course))   
            .catch(err => console.log(err))
            
            if(count<totcount && z>=1800000){     
             User.findOne({status:"WAITING",courseid:deleteduser.courseid})
             .sort({createdAt:1})
             .then(users=>{
                 users.status="CONFIRM"   
                 console.log(users)
                 users.save()
                 .then(users => res.json(users))   
                 .catch(err => console.log(err))
     
                 Course.findById({_id:users.courseid})
                 .then(course => {
                     course.regCount+=1
                     course.save()
                     .then(course => res.json(course))
                     .catch(err => console.log(err))
                 })
             })
             .catch(err => console.log(err))
         }



        })
        .catch(err => console.log(err))
        }
    else     return res.status(200).json('User deleted')
    })
    .catch(err => console.log(err))
    
      
       
    })



module.exports=router