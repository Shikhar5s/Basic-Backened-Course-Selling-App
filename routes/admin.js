const express=require('express');

const adminMiddleware=require("../middleware/admin")
const{Admin,Course}=require("../db")

const router=express.Router();


router.post("/signup",(req,res)=>{

    const username=req.body.username;
    const password=req.body.password;

    Admin.create({
        username,
        password
    })

    res.json({
        msg:"User created succesfully"
    })

})






router.post('/courses',adminMiddleware, async(req,res)=>{
  
    const title=req.body.title;
    const description=req.body.descripyion;
    const imagelink=req.body.imagelink;
    
    const price=req.body.price;
    const newCourse =await Course.create({
        title,
        description,
        imagelink,
        price
    })
    
    res.json({
        msg:"Course created succesfully", courseId:newCourse._id

    })

});
// give all the courses that has been created
router.get("/courses", adminMiddleware,(req,res)=>{
    Course.find({})

    .then(function(response){
      res.json({
           courses:response
       })
    })
})

module.exports=router;