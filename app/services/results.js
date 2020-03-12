const mysql = require('mysql');

module.exports = (query) => {
    return new Promise(function (resolve, reject) {
        var conn_infos = require(process.cwd() + '/services/dbcon');
        var con = mysql.createConnection(conn_infos);
        con.connect(function (err) {
            if (err) reject(err);
            con.query(query, function (err, res, fields) {                
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    });
}