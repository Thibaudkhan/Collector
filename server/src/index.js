'use strict';

const express = require('express');
const mysql      = require('mysql');
const app = express();
const PORT = 8080;
const HOST = '0.0.0.0';
const authRoutes = require("../Routes/authRoutes");
const bodyParser = require('body-parser')

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "root",
    database: process.env.MYSQL_DATABASE || "collector",
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authRoutes)


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
app.post('/test', (req, res) => {
    console.log('hlooaf');
    console.log(req.body);
    res.send('Hello World !!da ntmsss Asdsd eFda');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);