const express = require('express');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');

//const upload = multer({ dest: './uploads/' });

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/', router);

app.listen(8800, () => {
  console.log('Server is running!');
});
