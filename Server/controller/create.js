const Student = require("./model/studentSchema")

const createstudent=async(req,res)=>{
    const {name,subject,grade}=req.body
    const Studentdetails=await Student.create({name,subject,grade})
    res.json(Studentdetails)
}

module.exports=createstudent