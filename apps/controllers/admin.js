const express = require('express');
var router = express.Router();

router.get('/', (req, res)=> {
    res.json('This is admin page');
    
})

module.exports = router;