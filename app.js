require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Pusher = require('pusher');
var path = require('path');


var Book = require('./books.model');

var db = process.env.DB_PATH;
mongoose.connect(db);

var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var pusher = new Pusher({
	appId: process.env.PUSHER_APP_ID,
	key: process.env.PUSHER_KEY,
	secret: process.env.PUSHER_SECRET,
	cluster: process.env.PUSHER_CLUSTER,
	encrypted: true
});

app.use('/app', express.static(path.join(__dirname, 'public')));
app.get('/api', function(req, res){
	Book.find({})
	.exec(function(err, books){
		if (err){
			res.send('error has occured');	
		} else {
			res.json(books);
		}
	});
});

app.post('/api', function(req, res){
	Book.create(req.body, function (err, book) {
	  if (err) res.send('error');
	  pusher.trigger('my-channel', 'my-event', req.body);
	  res.json(book);
	})
});

app.listen(8080, function(){
	console.log('The app is starting at', port);
});