const express = require('express');

const postRouter = express.Router();

postRouter.get('/', (req, res) => {
  res.status(200).json('it works');
});

module.exports = postRouter;
