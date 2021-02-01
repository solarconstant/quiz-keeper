const express = require('express');
const mysqlconn = require('./config/db/mysqlconn');

const app = express();

mysqlconn.query("CREATE TABLE users (NAME CHAR, EMAIL CHAR)");

app.get('/', (req, res) =>
{
    res.send('HEY!');
});

app.listen(8000, () =>
{
    console.log('Listening at port 8000.');
});