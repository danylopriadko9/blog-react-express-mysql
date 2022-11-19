const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'master1951',
  database: 'blog',
});

module.exports = pool;
