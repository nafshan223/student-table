
const Student = require('./model/studentSchema'); // Adjust the path if necessary

const students = async (req, res) => {
    try {
        const { remarks, name } = req.query;

        // Define the filter object
        let filter = {};

        // Apply the filter based on remarks query parameter
        if (remarks) {
            filter.remarks = remarks.toUpperCase();
        }

        // Apply filter for student name (case-insensitive search)
        if (name) {
            filter.name = { $regex: new RegExp(name, 'i') }; // Case-insensitive search
        }

        // Fetch students based on the filter
        const students = await Student.find(filter);

        // If no students are found, return an appropriate message
        if (!students.length) {
            return res.status(404).json({ message: 'No students found.' });
        }

        // Return the filtered students
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }

};

module.exports = students;
