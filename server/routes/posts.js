const express = require('express');
const {
  addPost,
  getPost,
  deletePost,
  updatePost,
  getPosts,
} = require('../controllers/post');

const postRouter = express.Router();

postRouter.get('/', getPosts);
postRouter.get('/:id', getPost);
postRouter.post('/', addPost);
postRouter.delete('/:id', deletePost);
postRouter.put('/:id', updatePost);

module.exports = postRouter;
