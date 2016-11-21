var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/afishaDB');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var afishaSchema = mongoose.Schema({
	name: String
});
var Afisha = mongoose.model('Afisha', afishaSchema);
// todo move to connect class
exports.search = function(req, res, next) {
	Afisha.find(function (err, afisha) {
		if (err) return console.error(err);
		res.send(afisha)
	});
};


// var rockConcert = new Afisha({ name: 'Kiss' });
// rockConcert.save(function (err, rockConcert) {
// 	if (err) return console.error(err);
// });

