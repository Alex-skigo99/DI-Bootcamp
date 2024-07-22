const {
    getAllBooks,
    getOneBooks,
    insertBook
} = require('../controllers/books.controller.js');

const express = require('express');

const router = express.Router();

router.get('/api/books', getAllBooks);
router.get('/api/books/:id', getOneBooks);
router.post('/api/books', insertBook);

module.exports = {
    router
};