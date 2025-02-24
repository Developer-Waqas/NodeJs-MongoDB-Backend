const express = require('express');
const connectDB = require('./mongodb/mongodb');
const bodyParser = require('body-parser');
const Employee = require("./models/employee_model");
const app = express();
app.use(bodyParser.json());


// Post APi
app.post('/employee', async (req, res) => {
    const { empName, empType } = req.body;
    try {
        const emp = new Employee({ empName: empName, empType: empType });
        await emp.save();
        console.log("Employee Created: ", emp);
        res.status(200).json(emp);

    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get API
app.get('/employee', async (req, res) => {
    try {
        const emp = await Employee.find();
        if (!emp) {
            return res.status(200).json({ messaage: "No Employee Found!" });
        }
        res.status(200).json(emp);

    } catch (e) {
        res.status(400).json({ error: e.message });

    }
});

//Get API Search by ID
app.get('/employee/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const emp = await Employee.findById(id);
        if (!emp) {
            return res.status(200).json({ messaage: "No Employee Found!" });
        }
        res.status(200).json(emp);

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// Get API for Search by Employee Name
app.get('/employee/empName/:empName', async (req, res) => {
    try {
        const { empName } = req.params.empName;
        const emp = await Employee.findOne({ empName: empName });
        if (!emp) {
            return res.status(200).json({ messaage: "No Employee Found!" });
        }
        res.status(200).json(emp);

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

// Delete API
app.delete('/employee/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const emp = await Employee.findByIdAndDelete(id);
        res.status(200).json(emp);
    } catch (e) {
        res.status(400).json({ error: e.messaage });

    }
});

//Update API
app.put('/employee/wordDone/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const emp = Employee.findByIdAndUpdate(id, { isWordDone: true }, { new: true });
        res.status(200).json(emp);
    } catch (e) {
        res.status(400).json({ error: e.messaage });
    }
})





// MongoDb connections
connectDB();

// Server Port
app.listen('3000', () => {
    console.log("Server is running on port 3000");
    console.log("http://localhost:3000");
})