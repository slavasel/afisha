"use strict"
module.exports = {

	prepareConditions: (params) => {
		let conditions = {};

		if (params.id) {
			conditions._id =  { $in: params.id.split(',') }
		}

		return conditions;
	}
};