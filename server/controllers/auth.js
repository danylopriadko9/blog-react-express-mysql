const { pool } = require('../db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function register(req, res) {
  // check existing user
  try {
    const q = ' SELECT * FROM users WHERE email = ? OR username = ?';

    pool.getConnection((error, connection) => {
      connection.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) throw err;
        else {
          if (data.length) return res.status(409).json('User already exists!');

          // hash the password and create a user
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(req.body.password, salt);

          const q =
            'INSERT INTO users(`username`, `email`, `password`) VALUES (?)';
          const values = [req.body.username, req.body.email, hash];

          connection.query(q, [values], (err, data) => {
            if (err) throw err;
            else return res.status(200).json('User has been created.');
          });
        }
      });
      connection.release();
    });
  } catch (error) {
    console.log(error);
  }
}

function login(req, res) {
  try {
    // check user
    const q = 'SELECT * FROM users WHERE  username = ?';

    pool.getConnection((error, connection) => {
      connection.query(q, [req.body.username], (err, data) => {
        if (err) throw err;
        else {
          if (!data.length) return res.status(404).json('User not found!');

          const user = data[0];

          // Check password
          const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
          );

          if (!isPasswordCorrect)
            return res.status(400).json('Wrong username or password!');

          // create a access token
          const token = jwt.sign({ id: user.id }, 'secretjwtkey');

          const { password, ...other } = user;

          res
            .cookie('access_token', token, {
              httpOnly: true,
            })
            .status(200)
            .json(other);
        }

        connection.release();
      });
    });
  } catch (error) {
    console.log(error);
  }
}

function logout(req, res) {
  try {
    res
      .clearCookie('access_token', {
        sameSite: 'none',
        secture: true,
      })
      .status(200)
      .json('User has been logged out.');
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  register,
  login,
  logout,
};
