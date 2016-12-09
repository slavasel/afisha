import moment from 'moment';
import _ from 'lodash';

const _prepareData = (data) => {
	let preparedData = Object.assign({}, data);

	// Date preparing
	const format = 'YYYY-MM-DD';
	if (data.startDate && data.endDate) {
		preparedData.dates = `${data.startDate.format(format)}.${data.endDate.format(format)}`
	} else if (data.startDate) {
		preparedData.dates = `${data.startDate.format(format)}.${moment().add(1, 'year').format(format)}`
	} else if (data.endDate) {
		preparedData.dates = `${moment().format(format)}.${data.endDate.format(format)}`
	}
	delete preparedData.startDate;
	delete preparedData.endDate;

	return preparedData;
}

module.exports = {
	createLinkFromParams: (formData) => {
		let link = '';

		const preparedData = _.transform(_prepareData(formData), (res, v, k) => {
			if (v || v === 0) res[k] = v;
		});
		Object.keys(preparedData).sort().map((idx) => {
			link += `/${idx}-${preparedData[idx]}`
		});

		return link;
	},

	createApiParams: (formData) => {
		let link = '';

		let apiParams = {};
		// todo: additional specific route + params (i.e. bbox)
		apiParams = Object.assign(apiParams, _.defaults(formData, {
			startDate: '-',
			endDate: '-',
			search: '-'
		}));

		Object.keys(apiParams).map((idx) => {
			link += `/${apiParams[idx]}`
		});

		return link;
	}
}