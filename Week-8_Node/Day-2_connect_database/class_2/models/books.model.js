const {db} = require('../config/db.js')

const _getAllBooks = () => {
    return db('book').select('book_id', 'title', 'author').orderBy("book_id");
};

const _getOneBook = (book_id) => {
    return db('book')
        .select('book_id', 'title', 'author')
        .where({book_id: book_id})
};

const _insertBook = (title, author) => {
    return db('book').insert({title, author}, ['book_id', 'title', 'author'])
}

module.exports = {
    _getAllBooks,
    _getOneBook,
    _insertBook
};