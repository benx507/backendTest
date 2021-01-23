const db = require('./db.js')
const pool = db.pool

const createEmail = (req,res) => {
    const {email} = req.body;
    console.log(req.body)
    const text = 'INSERT INTO "emails" (userEmail) VALUES($1) RETURNING *'
    const values = [email]
    pool.query(text, values, (error,results) => {
        
        if (error) {
            return res.status(404).send({errors: error})
        } else {
            res.status(201).send('email logged');
        }
        return res;
    })
}
module.exports = { 
    createEmail
};