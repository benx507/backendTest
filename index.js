const testPort = 8000
const prodPort = 8080
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = testPort
const query = require('./queries')
var cors = require("cors");
app.use(cors());
app.options("*", cors())


app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');	    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});	


app.listen(port, () => {  console.log('We are live on ' + port);});
//test for frontend connected to backend
app.get("/", function(req, res, next) {
    res.send("Front End Server Connected to API ");
});
//Endpoint to connect to database
app.post('/api/email/', (req,res) => {
    console.log("reached POST endpoint")
    query.createEmail(req,res);

    
    query.SendMail(req,res);
})
