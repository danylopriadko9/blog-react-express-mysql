const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'master1951',
  database: 'blog',
  connectionLimit: 100,
});

module.exports = { pool };
