require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASS,
  database : process.env.DB
});

//connection.connect();

app.get('/', (req, res) => {
    res.send('Hello World! '+ process.env.HOST);
    /*
    connection.query('SELECT name from users', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].name);
        res.send('Hello World! '+ results[0].name);
    });*/
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})