const Student = require("./model/studentSchema")

const getstudent=async(req,res)=>{
    const getDtails=await Student.find()
    res.json(getDtails)
}
module.exports=getstudent