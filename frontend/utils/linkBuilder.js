import moment from 'moment';
import _ from 'lodash';

const _prepareData = (data) => {
	let preparedData = Object.assign({}, data);

	// Date preparing
	const format = 'YYYY-MM-DD';
	if (data.startDate && data.endDate) {
		preparedData.dates = `${data.startDate.format(format)}.${data.endDate.format(format)}`
	} else if (data.startDate) {
		preparedData.dates = `${data.startDate.format(format)}.max`
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

		const preparedData = _prepareData(formData);
		Object.keys(preparedData).sort().map((idx) => {
			link += `/${idx}-${preparedData[idx]}`
		});

		return link;
	}
}