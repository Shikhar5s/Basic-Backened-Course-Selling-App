
const express=require('express');

const userMiddleware=require("../middleware/user")
const{User,Course}=require("../db")

const router=express.Router();


router.post("/signup",(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;

    User.create({
        username,
        password
    })

    res.json({
        msg:"User created succesfully"
    })

})

router.get("/courses",async(req,res)=>{
/// give only publish courses
    const response=await Course.find({});

    res.json({
        courses:response
    })
});


router.post('/courses/:courseId',userMiddleware,async(req,res)=>{
  const courseId=req.params.courseId;

  const username=req.headers.username;
 await  User.updateOne({
    username:username

  },{
    "$push":{
        purchaseCourses:courseId
    }
  })
  res.json({
    message:"Purchase complete"
  })

});

router.post('/courses.purchasedCourses', async(req,res)=>{
 const user=await User.findOne({
    username:req.headers.username
 })

 const Course=await Courses.find({
     _id:{
        "$in":user.purchasedCourses
     }
 });

   



})
module.exports=router