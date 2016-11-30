import _ from 'lodash';
import localStorageHandler from '../utils/local_storage.js';

/* REQUEST AFISHAS */
export const REQUEST_AFISHAS = 'REQUEST_AFISHAS';
export function requestAfishas() {
	return {
		type: REQUEST_AFISHAS
	}
}

export const RECIEVE_AFISHAS = 'RECIEVE_AFISHAS';
const recieveAfishas = (json, memberId) => {
	return {
		type: RECIEVE_AFISHAS,
		afishas: memberId ? json : localStorageHandler.prepareFavoriteState(json),
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

/* HOVER AFISHA */
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

/* REQUEST AFISHA */
export const REQUEST_AFISHA = 'REQUEST_AFISHA';
function requestAfisha(id) {
	return {
		type: REQUEST_AFISHA,
		id: id
	}
}

export const RECIEVE_AFISHA = 'RECIEVE_AFISHA';
const recieveAfisha = (id, result) => {
	return {
		type: RECIEVE_AFISHA,
		id: id,
		afisha: result,
		receivedAt: Date.now()
	}
}

export function fetchAfishaById(id) {
	return function (dispatch) {
		dispatch(requestAfisha(id));

		return fetch(`/api/afisha/search/id/${id}`)
			.then(response => response.json())
			.then(json => dispatch(recieveAfisha(id, json)))
	}
}

/* Save item */
export const SAVE_ITEM = 'SAVE_ITEM';
function saveItem(id) {
	return {
		type: SAVE_ITEM,
		id: id
	}
}

export const saveItemToFavorites = (id, memberId) => {
	if (!memberId) {
		localStorageHandler.addToSaved(id);
		return saveItem(id);
	} else {
		// todo: request
	}
}

/* Unsave item */
export const UNSAVE_ITEM = 'UNSAVE_ITEM';
function unsaveItem(id) {
	return {
		type: UNSAVE_ITEM,
		id: id
	}
}

export const unsaveItemFromFavorites = (id, memberId) => {
	if (!memberId) {
		localStorageHandler.removeFromSaved(id);
		return unsaveItem(id);
	} else {
		// todo: request
	}
}