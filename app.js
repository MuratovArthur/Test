const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.use(mongoose.connect('mongodb+srv://Elman:123456789n@test.deg0b.mongodb.net/Test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }));


app.get("/", function (req, res){
   res.render('landing.ejs');
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
console.log("Server Has Started!");
});