const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const collection = require('./config');

const app = express();


//use EJS as the view engine
app.set('view engine', 'ejs');

//static file
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.render("login");
});

app.get("/signup", (req, res) =>{
    res.render("signup");
})

const port = 3000;
app.listen(port, () => {
    console.log(`server listening on port: ${port}`);
})