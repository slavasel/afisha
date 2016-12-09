var _ = require('lodash');

const _parseDate = (date) => {
	return date.split('-');
}

module.exports = {

	prepareConditions: (params) => {
		"use strict"
		let conditions = {};

		if (params.id) {
			conditions._id =  { $in: params.id.split(',') }
		}

		params = _.transform(params, (res, v, k) => {
			if (v !== '-') res[k] = v;
		});

		if (params.startDate && params.endDate) {
			const startDate = _parseDate(params.startDate);
			const endDate = _parseDate(params.endDate);
			conditions.startTime = {
				"$gte": new Date(startDate[0], startDate[1], startDate[2]),
				"$lt": new Date(endDate[0], endDate[1], endDate[2])
			}
		} else if (params.startDate && !params.endDate) {
			const startDate = _parseDate(params.startDate);
			conditions.startTime = {
				"$gte": new Date(startDate[0], startDate[1], startDate[2])
			}
		}
		
		return conditions;
	}
};