const express = require('express');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/', router);

app.listen(8800, () => {
  console.log('Server is running!');
});
