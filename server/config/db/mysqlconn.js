const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const conn = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: process.env.SQL_PASSWORD,
        database: 'quiz_keeper'
    }
);

const mysqlconn = conn.connect((err) => 
{
    if(err)
        throw err;
    else
    {
        console.log('CONNECTION SUCCESSFUL.');
    }
});

module.exports = mysqlconn;