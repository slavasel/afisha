import _ from 'lodash';

module.exports = {
	getUriFromParams: (params) => {
		let uriParams = _.transform(params, (res, v, k) => {
			if (v || v === 0) res[k] = v;
		});

		const uriParamsReady = Object.keys(uriParams).map(function(key) {
			return key + '=' + uriParams[key];
		}).join('&');

		return uriParamsReady;
	}
}