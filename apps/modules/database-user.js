const mongoose = require('mongoose');
const config = require('config');
const q = require('q');
var Schema = mongoose.Schema;

const username = config.get("mongoose.user");
const password = config.get("mongoose.password");

mongoose.connect('mongodb://'+username+':'+password+'@ds143573.mlab.com:43573/listuer');

const object = new Schema({
  name: { type: String},
  username: { type: String},
  password: { type: String},
  email: { type: String},
  img: { type: String, default:'default.png'},
  age: { type: Number, default: ''},
  tel: { type: Number, default: ''},
  address: { type: String, default: ''},
  dateJoin: { type: Date, default: Date.now }
});

const user = mongoose.model('object', object);

function insert(data) {
	var newUser = new user({
    name: data.nameuser,
    username: data.username,
    password: data.password,
    email: data.email
  })
  var defer = q.defer();
  newUser.save((err, result)=>{

    if (err) {
      defer.reject(err);
    } else {
      defer.resolve(result);
    }

  });

  return defer.promise;

}

function getUserByS(user_name) {
  if (user_name) {
    var defer = q.defer();
    user.findOne({username:user_name},(err, users)=>{
      if (err) {
        defer.reject(err)
      } else {
        defer.resolve(users)
      }
    })
    return defer.promise;
  } else {
    return false
  }
}

function upDateUser(name, data) {
  if (name && data) {
    var defer = q.defer();
    user.update({username: name}, data, (err, result)=> {
      if (err) {
          defer.reject(err)
      } else {
          defer.resolve(result)
      }
    });
    
    return defer.promise;
  } else {
    return false
  }
}

module.exports = {
  insert:insert,
  getUserByS:getUserByS,
  upDateUser:upDateUser
}



