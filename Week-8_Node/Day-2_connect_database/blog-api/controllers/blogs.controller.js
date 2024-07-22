const {
    _getAllPosts,
    _getOnePost,
    _insertPost,
    _updatePost,
    _deletePost
} = require('../models/blogs.model.js');

const getAllPosts = (req, res) => {
    _getAllPosts()
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.status(404).json({message:'something went wring!!!'});
        })
};

const getOnePost = (req, res) => {
    const { id } = req.params;
    _getOnePost(id)
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.status(404).json({message:'something went wring!!!'});
        })
};

const insertPost = (req, res) => {
    const {title, content} = req.body;
    _insertPost(title, content)
    .then(result => {
        res.json(result);
        // getAllBooks(req, res);
    })
    .catch(e => {
        res.status(404).json({message:'something went wring!!!'});
    })
};

const updatePost = (req, res) => {
    const { id } = req.params;
    const {title, content} = req.body;
    _updatePost(id, title, content)
    .then(result => {
        res.json(result);
        // getAllBooks(req, res);
    })
    .catch(e => {
        res.status(404).json({message:'something went wring!!!'});
    })
};

const deletePost = (req, res) => {
    const { id } = req.params;
    _deletePost(id)
        .then(result => {
            res.json(result)
        })
        .catch(e => {
            res.status(404).json({message:'something went wring!!!'});
        })
};

module.exports = {
    getAllPosts,
    getOnePost,
    insertPost,
    updatePost,
    deletePost
};