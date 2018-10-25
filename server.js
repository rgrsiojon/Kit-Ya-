const express = require('express');
const app = express();
const port =  process.env.PORT || 3000;

const controller =  require(__dirname + '/apps/controllers');

app.use(controller);

app.listen(port, ()=> {
    console.log('server runnong port 3000');
})