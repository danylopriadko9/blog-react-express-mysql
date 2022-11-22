const { pool } = require('../db.js');
const jwt = require('jsonwebtoken');

function addPost(req, res) {
  try {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json('Not authenticated.');

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
      if (err) return res.status(401).json('Token is not valid.');

      const q =
        'INSERT INTO posts (`title`, `desc`, `img`, `cat`, `date`, `user_id`) VALUES (?)';

      const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat,
        req.body.date,
        userInfo.id,
      ];

      pool.getConnection((error, connection) => {
        connection.query(q, [values], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.status(200).json('Post has been created');
        });

        connection.release();
      });
    });
  } catch (error) {
    console.log(error);
  }
}

function getPost(req, res) {
  try {
    const q = `
        SELECT p.id, username, p.img, u.img AS userImg, p.desc, date, cat, title, u.id FROM users u JOIN posts p ON p.user_id = u.id WHERE p.id = ?
    `;

    pool.getConnection((error, connection) => {
      connection.query(q, [req.params.id], (err, data) => {
        if (err) throw err;
        else {
          if (!data.length) return res.status(404).json('Post is not found.');
          return res.status(200).json(data[0]);
        }
      });

      connection.release();
    });
  } catch (error) {
    console.log(error);
  }
}

function deletePost(req, res) {
  try {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json('Not authenticated.');

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
      if (err) return res.status(401).json('Token is not valid.');

      const postId = req.params.id;

      const q = 'DELETE FROM posts WHERE id = ? AND user_id = ?';

      pool.getConnection((error, connection) => {
        connection.query(q, [postId, userInfo.id], (err, data) => {
          if (err)
            return res.status(403).json('You can delete only your posts.');

          return res.status(200).json('Post has been deteted.');
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
}

function updatePost(req, res) {
  try {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json('Not authenticated!');

    jwt.verify(token, 'jwtkey', (err, userInfo) => {
      if (err) return res.status(403).json('Token is not valid!');

      const postId = req.params.id;
      const q =
        'UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `user_id` = ?';

      const values = [
        req.body.title,
        req.body.desc,
        req.body.img,
        req.body.cat,
      ];

      pool.getConnection((error, connection) => {
        connection.query(q, [...values, postId, userInfo.id], (err, data) => {
          if (err) return res.status(500).json(err);
          return res.json('Post has been updated.');
        });
      });
    });
  } catch (error) {
    console.log(error);
  }
}

function getPosts(req, res) {
  try {
    const q = req.query.cat
      ? 'SELECT * FROM posts WHERE cat = ?'
      : 'SELECT * FROM posts';

    pool.getConnection((error, connection) => {
      connection.query(q, [req.query.cat], (err, data) => {
        if (err) throw err;
        else {
          res.status(200).json(data);
        }
      });

      connection.release();
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  addPost,
  getPost,
  deletePost,
  updatePost,
  getPosts,
};
