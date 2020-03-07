const express = require('express');
const app = express();

app.get('/quote', function (req, res) {
    
    var result = require(process.cwd() + '/services/results');
    result.then(function(val){
        res.status(200).send(val);
    }, function(err) {
        res.status(200).send(err);
    });     
});

app.use(function (req, res, next) {
    res.status(404).json({ msg: "Not found." })
});
 
app.listen(3000); 