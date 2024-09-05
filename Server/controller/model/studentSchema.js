const mongoose = require('mongoose');

// Define the schema
const studentSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true,
        min: [0, 'Grade cannot be less than 0'],     // Minimum value validation
        max: [100, 'Grade cannot exceed 100']   
    },
    remarks: {
        type: String,
        default: function() {
            return this.grade >= 75 ? 'PASS' : 'FAIL';
        }
    }
});

// Ensure that `remarks` is set when saving or updating
studentSchema.pre('save', function(next) {
    this.remarks = this.grade >= 75 ? 'PASS' : 'FAIL';
    next();
});

// Export the Student model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
