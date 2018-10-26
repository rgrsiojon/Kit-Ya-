const express = require('express');
var router = express.Router();

router.use('/admin', require(__dirname + '/admin'));
// router.use('/blog', require(__dirname + '/blog'));


router.get('/',  (req, res)=> {
    res.render('user/home');
})


router.get('/log',  (req, res)=> {
    res.render('user/login');
})

module.exports = router;