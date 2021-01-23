const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const query = require('./queries')
var cors = require("cors");
app.use(cors());


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {  console.log('We are live on ' + port);});
//test for frontend connected to backend
app.get("/", function(req, res, next) {
    res.send("Front End Server Connected to API ");
});
//Endpoint to connect to database
app.post('/api/email/', (req,res) => {
    query.createEmail(req,res);
})
