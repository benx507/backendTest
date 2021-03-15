const Pool = require('pg').Pool;
const Test = 'localhost'
const Prod = 'polici-web.ctvjusy0w8gy.us-east-2.rds.amazonaws.com'
const pool = new Pool({
    user: 'postgres',
    host: Prod,
    database: 'postgres',
    //Note Test password is CY911911!!
    password: 'Cy911911!',
    port: 5432,
  })
  
  module.exports = {
    pool,
  }