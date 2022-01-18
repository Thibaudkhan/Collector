'use strict';

const express = require('express');
const mysql      = require('mysql');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE || "collector",
});



app.get("/", (req, res) => {
    connection.query("SELECT * FROM followers", (err, rows) => {
        if (err) {
            res.json({
                success: false,
                err,
            });
        } else {
            res.json({
                success: true,
                rows,
            });
        }
    });
});
// Constants

// App

// Creation Home page
/*app.get('/', (req, res) => {
    console.log('hlooa');
    res.send('Hello World !!da ntmsss Asdsd eFda');
});*/

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);