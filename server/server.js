'use strict';
const mongoose = require('mongoose');
var express = require('express')
  , app     = express();

app.use(express.cookieParser());

app.get('../public/', function(req, res) {
  console.log(req.cookies)
  res.send(index.html)
})

mongoose.connect('mongodb://localhost/Mydatabase');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Myschema = new Schema({
	author: ObjectId,
	title: String,
	body: String,
	date: Date
});

app.listen('3000');

/*
var Mymodel = mongoose.model('Myschema');
var Mydatabase = new Mymodel();
Mydatabase.comments.push({
	title: 'My test',
	content: 'just for testing'
});
Mydatabase.save(function (err) {
  if (!err) console.log('Success!');
});
*/

//module.exports = mongoose.model('Mydatabase', Myschema);

