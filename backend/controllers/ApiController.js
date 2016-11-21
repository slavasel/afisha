var db = require('../lib/db.js'),
	mongoose = require('mongoose'),
	afishaSchema = require('../lib/schemas/afisha.js'),
	afishaModel = mongoose.model('Afisha', afishaSchema)

exports.search = function(req, res, next) {
	db.start(() => {
		afishaModel.find(function (err, afisha) {
			if (err) {
				return res.send({message: 'error', err: err});
			}
			res.send(afisha);
			db.close();
		});
	})
};

exports.add = function(req, res, next) {
	db.start(() => {
		var rockConcert = new afishaModel({ name: 'AC/DC', place: 'Planeta Kino', coords: {lat: 50, lon: 30}, image: '' });
		rockConcert.save(function (err, rockConcert) {
			if (err) {
				return res.send({message: 'error', err: err});
			}
			res.send({message: 'ok'});
			db.close();
		});
	})
};

exports.clear = function(req, res, next) {
	db.start(() => {
		afishaModel.remove({}, function(err) {
			if (err) {
				return res.send({message: 'error', err: err});
			}
			res.send({message: 'collection removed'});
			db.close();
		});
	})
};

