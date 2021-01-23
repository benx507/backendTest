const db = require('./db.js')
const pool = db.pool

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const createEmail = (req, res) => {
    const { email } = req.body;
    console.log(req.body)
    if (validateEmail(email)) {
        const text = 'INSERT INTO "emails" (userEmail) VALUES($1) RETURNING *'
        const values = [email]
        pool.query(text, values, (error, results) => {

            if (error) {
                res.status(400);
                throw error
            } else {
                res.status(201).send({ "message": 'email logged' })
            }
        })
    }
    else {
        res.status(500).send({ "message": "invalid email" });
    }
}
module.exports = {
    createEmail
};