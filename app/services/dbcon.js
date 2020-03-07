var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "quotes"
});
con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM quotes", function (err, result, fields) {
        if (err) throw err;
        //res.status(200).json({ quote: "Une superbe citation" })
        res.status(200).json(result)
    });
});