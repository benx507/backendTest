const db = require('./db.js')
const pool = db.pool
const nodemailer = require('./node_modules/nodemailer');
const pug = require('pug');

require('dotenv').config();

const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
const createEmail = (req, res) => {
    const { email } = req.body;
    console.log(req.body)
    const text = 'INSERT INTO "emails" (userEmail) VALUES($1) RETURNING *'
    const values = [email]
    pool.query(text, values, (error,results) => {
        if (validateEmail(email)) {
            if (error) {
                return res.status(404).send({errors: error})
            } else {
                res.status(201).send('email logged');
            }
            return res;
        }
        else {
            res.status(500).send({ "message": "invalid email" });
        }
        
    })
   
}


const SendMail = (req,res) => {
    const { email } = req.body;
      // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
        user: process.env.EMAIL, // generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
        },
    });

    let mailOptions = {
        from: '"Hello From Polici!" <founders@polici.org>', // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: pug.renderFile(__dirname + '/welcome.html') // html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(err,data) {
        if(err) {
            console.log('Error')
            return res.status(404).send("no")
        }
        else {
            console.log('Email Sent!')
            return res.status(500).send("yuh")
        }
    })
    

    
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}


module.exports = {
    createEmail,
    SendMail,
};