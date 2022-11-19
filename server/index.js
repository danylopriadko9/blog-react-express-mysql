const express = require('express');
const cors = require('cors');

const PORT = 8800;

const app = express();
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} port!`);
});
