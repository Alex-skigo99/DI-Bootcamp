const {
    _getAllBooks,
    _getOneBook,
    _insertBook
} = require('../models/books.model.js');

const getAllBooks = (req, res) => {
    _getAllBooks()
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.status(404).json({message:'something went wring!!!'});
        })
};

const getOneBooks = (req, res) => {
    const { id } = req.params;
    _getOneBook(id)
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.status(404).json({message:'something went wring!!!'});
        })
};

const insertBook = (req, res) => {
    const {title, author} = req.body;
    _insertBook(title, author)
    .then(result => {
        res.json(result);
        // getAllBooks(req, res);
    })
    .catch(e => {
        res.status(404).json({message:'something went wring!!!'});
    })
};

module.exports = {
    getAllBooks,
    getOneBooks,
    insertBook
};