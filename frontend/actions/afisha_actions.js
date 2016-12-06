import localStorageHandler from '../utils/local_storage.js';
import uriHelper from '../utils/uri.js';

/* REQUEST AFISHAS */
export const REQUEST_AFISHAS = 'REQUEST_AFISHAS';
export function requestAfishas() {
	return {
		type: REQUEST_AFISHAS
	}
}

export const RECIEVE_AFISHAS = 'RECIEVE_AFISHAS';
const recieveAfishas = (json) => {
	return {
		type: RECIEVE_AFISHAS,
		afishas: window.memberId ? json.results : localStorageHandler.prepareFavoriteState(json.results),
		totalResults: json.totalResults,
		receivedAt: Date.now()
	}
}

export function fetchAfishas(params) {
	return function (dispatch) {
		dispatch(requestAfishas());

		const uriParamsReady = uriHelper.getUriFromParams(params);

		return fetch(`/api/afisha/search?${uriParamsReady}`)
			.then(response => response.json())
			.then(json =>
				dispatch(recieveAfishas(json))
			)
	}
}

export function fetchAfishaById(id, params) {
	return function (dispatch) {
		dispatch(requestAfishas());

		const uriParamsReady = uriHelper.getUriFromParams(params);

		return fetch(`/api/afisha/search/id/${id}?${uriParamsReady}`)
			.then(response => response.json())
			.then(json => dispatch(recieveAfishas(json)))
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

export const unsaveItemFromFavorites = (id) => {
	if (!window.memberId) {
		localStorageHandler.removeFromSaved(id);
		return unsaveItem(id);
	} else {
		// todo: request
	}
};

/* Delete item */
export const DELETE_ITEM = 'DELETE_ITEM';
function deleteItem(id) {
	return {
		type: DELETE_ITEM,
		id: id
	}
}

export const deleteItemFromFavorites = (id) => {
	if (!window.memberId) {
		localStorageHandler.removeFromSaved(id);
		return deleteItem(id);
	} else {
		// todo: request
	}
}