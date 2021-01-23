const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'polici-web.ctvjusy0w8gy.us-east-2.rds.amazonaws.com',
    database: 'postgres',
    password: 'Cy911911!',
    port: 5432,
  })
  
  module.exports = {
    pool,
  }