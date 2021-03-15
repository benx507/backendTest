const Pool = require('pg').Pool;
const Test = 'localhost'
const Prod = 'polici-web.ctvjusy0w8gy.us-east-2.rds.amazonaws.com'
const pool = new Pool({
    user: 'postgres',
    host: Test,
    database: 'postgres',
    password: 'Cy911911!!',
    port: 5432,
  })
  
  module.exports = {
    pool,
  }