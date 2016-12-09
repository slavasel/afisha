var db = require('../lib/db.js'),
	mongoose = require('mongoose'),
	afishaSchema = require('../lib/schemas/afisha.js'),
	afishaModel = mongoose.model('Afisha', afishaSchema),
	prepareConditions = require('../lib/conditionsHelper.js').prepareConditions;

exports.search = function(req, res, next) {
	db.start(() => {
		"use strict";

		const limit = req.query.count ? parseInt(req.query.count) : 200;
		const skip = req.query.startIndex ? parseInt(req.query.startIndex) : 0;
		const sortValue = {};
		if (typeof req.query.nearest !== 'undefined') {
			sortValue.startTime = 'asc';
		}
		let conditions = prepareConditions(req.params);

		afishaModel.find(conditions).limit(limit).skip(skip).sort(sortValue).exec(function (err, afisha) {
			if (err) {
				return res.send({message: 'error', err: err});
			}

			let returnData = {};
			afisha.map((item, idx) => {
				returnData[item._id] = item;
			});

			// return total results value for pagination
			afishaModel.find(conditions).count('_id').exec((err, count) => {
				res.send({results: returnData, totalResults: count});
				db.close();
			});
		});
	})
};

exports.add = function(req, res, next) {
	db.start(() => {
		"use strict";

		if (req.params.name) {
			let params = {
				name: req.params.name,
				place: req.params.place,
				coords: {lat: req.params.lat, lng: req.params.lng},
				image: ''
			};

			if (req.params.startTime) {
				const startTime = req.params.startTime.split('-');
				params.startTime = new Date(startTime[0], startTime[1], startTime[2], startTime[3], startTime[4]);
			}

			const cityEvent = new afishaModel(params);

			cityEvent.save(function (err, ev) {
				if (err) {
					return res.send({message: 'error', err: err});
				}
				res.send({message: 'ok'});
				db.close();
			});
		}

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

