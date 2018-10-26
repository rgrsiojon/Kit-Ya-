const express = require('express');
var router = express.Router();

router.use('/admin', require(__dirname + '/admin'));
// router.use('/blog', require(__dirname + '/blog'));


router.get('/',  (req, res)=> {
    res.render('user/home', {data:{}});
})


router.get('/log',  (req, res)=> {
    res.render('user/login', {data:{}});
})

module.exports = router;