import _ from 'lodash';

export const REQUEST_AFISHAS = 'REQUEST_AFISHAS';
function requestAfishas() {
	return {
		type: REQUEST_AFISHAS
	}
}

export const RECIEVE_AFISHAS = 'RECIEVE_AFISHAS';
const recieveAfishas = (json) => {
	return {
		type: RECIEVE_AFISHAS,
		afishas: json,
		receivedAt: Date.now()
	}
}

export function fetchAfishas(count) {
	return function (dispatch) {
		dispatch(requestAfishas());

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

export const HOVER_ITEM = 'HOVER_ITEM';
export function hoverItem(id) {
	return {
		type: HOVER_ITEM,
		id: id
	}
}

export const HOVER_OUT_ITEM = 'HOVER_OUT_ITEM';
export function hoverOutItem(id) {
	return {
		type: HOVER_OUT_ITEM,
		id: id
	}
}