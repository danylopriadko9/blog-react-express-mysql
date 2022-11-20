const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
  res.status(200).json('it works');
});

module.exports = userRouter;
