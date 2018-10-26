const express = require('express');
// const config = require('config');
const bodyParser = require('body-parser');
const app = express();
// const host = config.get("server.host");
const port = process.env.PORT || 3000;
const session = require('express-session');
// const socketio = require('socket.io'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// @trust first proxy

app.set('trust proxy', 1) 
app.use(session({
  secret: 'roger',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.set('views', (__dirname + "/apps/views"));
app.set('view engine', 'ejs');

app.use('/public', express.static(__dirname + '/public'));

const controllers = require(__dirname + "/apps/controllers");
app.use(controllers);


var server = app.listen(port, (req, res)=>{
	console.log(`Server running on port ${port}`);
})

// var io = socketio(server);

// var socketControl = require('./apps/common/connectionConvser')(io);