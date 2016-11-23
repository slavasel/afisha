import _ from 'lodash';

export const REQUEST_AFISHAS = 'REQUEST_AFISHAS'
function requestAfishas() {
	return {
		type: REQUEST_AFISHAS
	}
}

export const RECIEVE_AFISHAS = 'RECIEVE_AFISHAS'
const recieveAfishas = (json) => {
	return {
		type: RECIEVE_AFISHAS,
		afishas: json,
		receivedAt: Date.now()
	}
}

export function fetchAfishas(count) {
	return function (dispatch) {
		dispatch(requestAfishas())

		let uriParams = _.transform({
			count: count
		}, (res, v, k) => {
			if (v) res[k] = v;
		});

		const uriParamsReady = Object.keys(uriParams).map(function(key) {
			return key + '=' + uriParams[key];
		}).join('&');

		return fetch(`/api/afisha/search?${uriParamsReady}`)
			.then(response => response.json())
			.then(json =>
				dispatch(recieveAfishas(json))
			)
	}
}