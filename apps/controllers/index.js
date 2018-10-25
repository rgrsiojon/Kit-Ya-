const express = require('express');
const roter = express.Router();

roter.get('/',  (req, res)=> {
    res.json({"meg":"this is my test"})
})

module.exports = roter;