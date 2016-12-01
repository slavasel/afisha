import localStorageHandler from '../utils/local_storage.js';

/* FAV COUNT */
export const GET_FAV_COUNT = 'GET_FAV_COUNT';
function favCount(count) {
	return {
		type: GET_FAV_COUNT,
		count: count
	}
}

export const getFavCount = () => {
	if (!window.memberId) {
		const count = localStorageHandler.getFavCount();
		return favCount(count);
	} else {
		// todo: request
	}
};

export const INCREASE_FAV_COUNT = 'INCREASE_FAV_COUNT';
export function increaseFavCount() {
	return {
		type: INCREASE_FAV_COUNT
	}
}

export const DECREASE_FAV_COUNT = 'DECREASE_FAV_COUNT';
export function decreaseFavCount() {
	return {
		type: DECREASE_FAV_COUNT
	}
}
