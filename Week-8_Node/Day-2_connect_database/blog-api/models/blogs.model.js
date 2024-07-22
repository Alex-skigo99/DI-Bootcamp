const {db} = require('../config/db.js')
const table = 'posts'

const _getAllPosts = () => {
    return db(table).select('id', 'title', 'content').orderBy("id");
};

const _getOnePost = (id) => {
    return db(table)
        .select('id', 'title', 'content')
        .where({id: id})
};

const _insertPost = (title, content) => {
    return db(table)
        .insert({title, content}, ['id', 'title', 'content'])
}

const _updatePost = (id, tit, cont) => {
    return db(table)
        .where({id: id})
        .update({title: tit, content: cont}, ['id', 'title', 'content'])
};

const _deletePost = (id) => {
    return db(table)
        .where({id: id})
        .delete()
};


module.exports = {
    _getAllPosts,
    _getOnePost,
    _insertPost,
    _updatePost,
    _deletePost
};