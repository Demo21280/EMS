const express = require('express');
const router = express.Router();
const { getUsers, register, createTaskForAllEmployees, addNewEmployee, updateTask, deleteTask, acceptTask } = require('../controllers/users');

router.get('/', getUsers);

router.post('/register', register);

router.post('/create-task-all', createTaskForAllEmployees);

router.post('/add-employee', addNewEmployee);

router.put('/:userId/tasks/:taskIndex', updateTask);

router.delete('/:userId/tasks/:taskIndex', deleteTask);

router.put('/:userId/tasks/:taskIndex/accept', acceptTask);

module.exports = router;

