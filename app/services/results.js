const mysql = require('mysql');
var conn_infos = require(process.cwd() + '/services/dbcon');


function result() {
    return new Promise(function (resolve, reject) {
        var con = mysql.createConnection(conn_infos);
        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT * FROM quotes ORDER BY RAND() LIMIT 1", function (err, res, fields) {
                if (err) throw err;
                resolve(res);
            });
        });
    });
}

module.exports = result();


/*const mysql = require('mysql');
var conn_infos = require(process.cwd() + '/services/dbcon');
var con = mysql.createConnection(conn_infos);

var quote;

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM quotes ORDER BY RAND() LIMIT 1", function (err, res, fields) {
        if (err) throw err;
        quote = res;
    });
});

console.log(quote);*/