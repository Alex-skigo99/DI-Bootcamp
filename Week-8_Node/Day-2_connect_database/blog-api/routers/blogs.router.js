const {
    getAllPosts,
    getOnePost,
    insertPost,
    updatePost,
    deletePost
} = require('../controllers/blogs.controller.js');

const express = require('express');

const router = express.Router();

router.get('/posts', getAllPosts);
router.get('/posts/:id', getOnePost);
router.post('/posts', insertPost);
router.put('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

module.exports = {
    router
};