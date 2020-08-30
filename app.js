const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.get("/", function (req, res){
   res.render('landing.ejs');
});

app.listen(3000, () => console.log('Server is working'))