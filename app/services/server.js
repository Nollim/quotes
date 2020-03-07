const express = require('express');
const app = express();
const mysql = require('mysql');

app.get('/quote', function (req, res) {
    console.log(dotenv);
    res.status(200).send('Coming soon !!!');    
});

app.use(function (req, res, next) {
    res.status(404).json({ msg: "Not found." })
});

 
app.listen(3000); 