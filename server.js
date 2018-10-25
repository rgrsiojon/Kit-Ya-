const express = require('express');
const app = express();

const controller =  require(__dirname + '/apps/controllers');

app.use(controller);

app.listen(3000, ()=> {
    console.log('server runnong port 3000');
})