const Student = require("./model/studentSchema")


const getitemstudent = async (req,res)=>{
    const getidstudent= req.params.id
    const studentid =await Student.findById({_id:getidstudent})
    res.json(studentid)
}

module.exports = getitemstudent