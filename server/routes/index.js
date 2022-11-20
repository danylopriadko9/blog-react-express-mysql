const express = require('express');
const userRouter = require('./users.js');
const authRouter = require('./auth.js');
const postRouter = require('./posts.js');

const router = express.Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/post', postRouter);

module.exports = router;
