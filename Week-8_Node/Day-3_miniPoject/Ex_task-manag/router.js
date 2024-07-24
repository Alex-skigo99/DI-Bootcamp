const {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require('./controller.js');

const express = require('express');

const router = express.Router();

router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = {
    router
};