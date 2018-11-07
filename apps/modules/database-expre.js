const mongoose = require('mongoose');
const config = require('config');
const q = require('q');
var Schema = mongoose.Schema;

const username = config.get("mongoose.user");
const password = config.get("mongoose.password");

mongoose.connect('mongodb://'+username+':'+password+'@ds143573.mlab.com:43573/listuer');

const object = new Schema({
  	username: {type: String},
  	list_exp: {type: Array}
});

const listexpre = mongoose.model('listExper', object);

function Insert(data) {
  var experence = new listexpre ({
    username: data.username,
    list_exp: data.list_exp
  })

  var defer = new q.defer();

  experence.save((err,result)=> {
    if (err) {
        defer.reject(err)
    } else {
        defer.resolve(result);
    }
  })

  return defer.promise;
}


function getDataByUser(user) {
 if (user) {
    var defer = q.defer();
    listexpre.findOne({username:user},(err, list)=>{
      if (err) {
        defer.reject(err)
      } else {
        defer.resolve(list)
      }
    })
    return defer.promise;
  } else {
    return false
  }
}


function upDateData (name, data) {
  if (name && data) {
    var defer = q.defer();
    listexpre.update({username: name}, data, (err, result)=> {
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
  Insert:Insert,
  getDataByUser:getDataByUser,
  upDateData:upDateData
}



