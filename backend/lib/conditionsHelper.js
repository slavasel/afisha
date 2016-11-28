"use strict"
module.exports = {

	prepareConditions: (params) => {
		let conditions = {};

		if (params.id) {
			conditions._id = params.id;
		}

		return conditions;
	}
};