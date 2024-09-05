const Student = require("./model/studentSchema");

const updatestudent = async (req, res) => {
    try {
        const { name, subject, grade } = req.body;
        const getstudentid = req.params.id;

        // Check if all necessary fields are provided
        if (!name || !subject || !grade) {
            return res.status(400).json({ message: "All fields (name, subject, grade) are required." });
        }

        // Determine the remark based on the grade
        let remarks = grade >= 75 ? 'PASS' : 'FAIL';

        // Find and update the student
        const studentupdate = await Student.findByIdAndUpdate(
            getstudentid,
            { name, subject, grade, remarks }, // Add remarks to be updated
            { new: true, runValidators: true } // Return updated document and run validators
        );

        // If the student is not found
        if (!studentupdate) {
            return res.status(404).json({ message: "Student not found." });
        }

        // Respond with the updated student data
        res.json(studentupdate);
    } catch (error) {
        // Catch any other errors
        console.error(error);
        res.status(500).json({ message: "Server error." });
    }
};

module.exports = updatestudent;
