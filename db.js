const mysql = require('mysql2/promise');
require('dotenv').config();

// Connection pool to RDS MySQL instance.
// All values come from environment variables (.env on the EC2 server) —
// never hardcode DB credentials in source code.
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
