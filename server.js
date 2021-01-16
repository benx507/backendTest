const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const query = require('./app/routes/queries')


app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {  console.log('We are live on ' + port);});
app.post('/api/email/', (req,res) => {
    //console.log(req);
    query.createEmail(req,res);
})
