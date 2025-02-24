const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    empName: {
        type: String,
        required: true,
    },
    empType: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isWordDone: {
        type: Boolean,
        default: false
    }

}, { collection: 'Employee Collections' });

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;