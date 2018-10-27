const mongoose = require('mongoose');

mongoose.connect('mongodb://roger:cunc0njinkai99@ds143573.mlab.com:43573/listuer');

const object = new Schema({
  name: { type: String, default: '' },
  username: { type: String},
  password: { type: String},
  email: { type: String},
  img: { type: String, default:'default.png'},
  age: { type: Number, min: 18, index: true },
  job: { type: String, match: /[a-z]/ },
  dateJoin: { type: Date, default: Date.now }
});

const user = mongoose.model('object', object);

function insert(data) {
	var newUser = new user({
	})

}



