const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.get("/", function (req, res){
   res.render('landing.ejs');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
console.log("Server Has Started!");
});