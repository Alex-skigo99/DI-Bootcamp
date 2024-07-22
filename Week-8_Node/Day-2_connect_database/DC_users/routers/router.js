const {
    getAllUsers,
    getOneUser,
    insertUser,
    updateUser,
    deleteUser,
    loginUser
} = require('../controllers/controller.js');

const express = require('express');

const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getOneUser);
router.post('/register', insertUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/login', loginUser);

module.exports = {
    router
};