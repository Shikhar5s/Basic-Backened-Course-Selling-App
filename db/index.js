const mongoose=require("mongoose");


mongoose.connect("mongodb+srv://shikharphenomenal4953:qix8dAwD3uYsosei@cluster0.qgrmxst.mongodb.net/wow?retryWrites=true&w=majority&appName=Cluster0")


const AdminSchema=new mongoose.Schema({

    username:String,
    password:String
});
// Creating schemas

const UserSchema=new mongoose.Schema({

    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Courses'
    }]
})
const CourseSchema=new mongoose.Schema({

    username:String,
    description:String,
    imagelink:String,
    price:Number
})


const Admin=mongoose.model("Admin",AdminSchema);

const User=mongoose.model("User",UserSchema);

const Course=mongoose.model("Course",CourseSchema);

module.exports={

    Admin,
    User,
    Course
}
console.log('chal gya')