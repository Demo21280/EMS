const user = require('../models/users'); 

const getUsers = async (req, res) => {
    let userData = await user.find();
    res.send(userData);
}

const register = async (req, res) => {
    let data = req.body;
    let userExists = await user.findOne({ email: data.email });
    if(userExists) {
        return res.status(400).send("User already exists");
    }
    let newUser = await user.create(data);
    res.send(newUser);
    console.log("User registered successfully");
};

const createTaskForAllEmployees = async (req, res) => {
    try {
        const { taskTitle, taskDescription, taskDate, category } = req.body;
        if (!taskTitle || !taskDescription || !taskDate || !category) {
            return res.status(400).send("Please provide all required fields");
        }
        const newTask = {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle,
            taskDescription,
            taskDate,
            category,
            theam: "bg-green-400"
        };

        const allUsers = await user.find();
        for (let employee of allUsers) {
            employee.tasks.push(newTask);
            employee.taskCounts.newTask += 1;
            employee.taskCounts.active += 1;
            
            await employee.save();
        }
        
        res.status(201).send({ message: "Task created for all employees", task: newTask });
        console.log("Task created for all employees successfully");
    } catch (error) {
        res.status(500).send("Error creating task: " + error.message);
    }

};


const addNewEmployee = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).send("Please provide name, email, and password");
        }
        
        let userExists = await user.findOne({ email: email });
        if (userExists) {
            return res.status(400).send("User already exists");
        }
        const newEmployee = await user.create({
            name,
            email,
            password,
            taskCounts: {
                active: 0,
                newTask: 0,
                completed: 0,
                failed: 0
            },
            tasks: []
        });
        
        res.status(201).send(newEmployee);
        console.log("Employee added successfully");
    } catch (error) {
        res.status(500).send("Error adding employee: " + error.message);
    }
};

const updateTask = async (req, res) => {
    try {
        const { userId, taskIndex } = req.params;
        const { taskTitle, taskDescription, taskDate, category, active, completed, failed } = req.body;
        const employee = await user.findById(userId);
        if (!employee) {
            return res.status(404).send("Employee not found");
        }
        
        // Check if task exists at the given index
        if (!employee.tasks[taskIndex]) {
            return res.status(404).send("Task not found");
        }
        const oldTask = employee.tasks[taskIndex];
        if (oldTask.active) employee.taskCounts.active -= 1;
        if (oldTask.newTask) employee.taskCounts.newTask -= 1;
        if (oldTask.completed) employee.taskCounts.completed -= 1;
        if (oldTask.failed) employee.taskCounts.failed -= 1;
        if (taskTitle) employee.tasks[taskIndex].taskTitle = taskTitle;
        if (taskDescription) employee.tasks[taskIndex].taskDescription = taskDescription;
        if (taskDate) employee.tasks[taskIndex].taskDate = taskDate;
        if (category) employee.tasks[taskIndex].category = category;
        if (active !== undefined) employee.tasks[taskIndex].active = active;
        if (completed !== undefined) employee.tasks[taskIndex].completed = completed;
        if (failed !== undefined) employee.tasks[taskIndex].failed = failed;
        if (completed || failed) employee.tasks[taskIndex].newTask = false;
        if (employee.tasks[taskIndex].active) employee.taskCounts.active += 1;
        if (employee.tasks[taskIndex].newTask) employee.taskCounts.newTask += 1;
        if (employee.tasks[taskIndex].completed) employee.taskCounts.completed += 1;
        if (employee.tasks[taskIndex].failed) employee.taskCounts.failed += 1;
        await employee.save();
        
        res.status(200).send({ message: "Task updated successfully", task: employee.tasks[taskIndex] });
        console.log("Task updated successfully for employee:", userId);
    } catch (error) {
        res.status(500).send("Error updating task: " + error.message);
    }
};

const deleteTask = async (req, res) => {
    try {
        const { userId, taskIndex } = req.params;
        const employee = await user.findById(userId);
        if (!employee) {
            return res.status(404).send("Employee not found");
        }
        
        // Check if task exists at the given index
        if (!employee.tasks[taskIndex]) {
            return res.status(404).send("Task not found");
        }
        const deletedTask = employee.tasks[taskIndex];
        if (deletedTask.active) employee.taskCounts.active -= 1;
        if (deletedTask.newTask) employee.taskCounts.newTask -= 1;
        if (deletedTask.completed) employee.taskCounts.completed -= 1;
        if (deletedTask.failed) employee.taskCounts.failed -= 1;
        employee.tasks.splice(taskIndex, 1);
        await employee.save();
        
        res.status(200).send({ message: "Task deleted successfully" });
        console.log("Task deleted successfully for employee:", userId);
    } catch (error) {
        res.status(500).send("Error deleting task: " + error.message);
    }
};

const acceptTask = async (req, res) => {
    try {
        const { userId, taskIndex } = req.params;
        const employee = await user.findById(userId);
        if (!employee) {
            return res.status(404).send("Employee not found");
        }
        
        // Check if task exists at the given index
        if (!employee.tasks[taskIndex]) {
            return res.status(404).send("Task not found");
        }
        const task = employee.tasks[taskIndex];
        if (!task.active) {
            task.active = true;
            employee.taskCounts.active += 1;
        }
        if (task.newTask) {
            task.newTask = false;
            employee.taskCounts.newTask -= 1;
        }
        await employee.save();
        
        res.status(200).send({ message: "Task accepted successfully", task: task });
        console.log("Task accepted successfully for employee:", userId);
    } catch (error) {
        res.status(500).send("Error accepting task: " + error.message);
    }
};

module.exports = { getUsers, register, createTaskForAllEmployees, addNewEmployee, updateTask, deleteTask, acceptTask };