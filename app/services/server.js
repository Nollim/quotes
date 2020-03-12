const express = require('express');
const app = express();

app.get('/quote', function (req, res) {
    query = "SELECT * FROM quotes ORDER BY RAND() LIMIT 1";
    var result = require(process.cwd() + '/services/results')(query);
    result.then(function (val) {
        res.status(200).set('Cache-Control', 'no-cache').send(val);
    }, function (err) {
        res.status(500).send(err);
    })
});

app.use(function (req, res, next) {
    res.status(404).json({ msg: "Not found." })
});

app.listen(3000); 