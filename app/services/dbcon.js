const { env } = require(process.cwd() + '/config/config');
//const mysql = require('mysql');
module.exports = {
    host: env.MYSQL_HOST,
    user: env.MYSQL_USER,
    password: env.MYSQL_PASSWORD,
    database: env.MYSQL_DATABASE
};
