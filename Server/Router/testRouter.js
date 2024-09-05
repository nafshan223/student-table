const express=require("express")
const router = express.Router()
const createstudent = require("../controller/create")
const protect = require("../controller/middleware/token")
const getstudent = require("../controller/getstudent")
const updatestudent = require("../controller/update")
const getitemstudent = require("../controller/getstudentbyid")
const deleteitemsproduct = require("../controller/delete")
const students = require("../controller/filter")
const middleware=[protect]

//student routes

router.route('/createstudent').post(createstudent)
router.route('/getstudent').get(getstudent)
router.route('/updatestudent/:id').put(updatestudent)
router.route('/getitemstudent/:id').get(getitemstudent)
router.route('/deleteidproduct/:id').delete(deleteitemsproduct)
router.route('/students').get(students);
module.exports=router