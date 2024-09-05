const Student = require("./model/studentSchema")



const deleteitemsproduct=async(req,res)=>{
    const getdd=req.params.id
    const productid=await Student.findByIdAndDelete({_id:getdd})
    res.json(productid)
    
}


module.exports = deleteitemsproduct