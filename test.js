var express = require('express');
var app = express();
app.set('view engine', 'ejs');
// index page 
app.get('/', function(req, res) {
    res.render('index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('about');
});

app.listen(3000);