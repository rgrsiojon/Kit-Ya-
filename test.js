const mongoose = require('mongoose');

mongoose.connect('mongodb://roger:cunc0njinkai99@ds143573.mlab.com:43573/listuer');


const Schema = mongoose.Schema;
 
const BlogPost = new Schema({
    title: String,
    body: String
});

const MyModel = mongoose.model('Ticket', BlogPost);


// const instance = new MyModel({
// 	title: 'titel',
//     body: 'body'
// });
// instance.save(function (err) {
//     if (!err) {
//     	console.log('ok');
//     } else {
//     	console.log('wrong');
//     }
// });

MyModel.find({title: 'titel2'}, function (err, docs) {
 	if (!err) {
 		console.log(docs);
 	} else {
 		console.log('wrong');
 	}
});