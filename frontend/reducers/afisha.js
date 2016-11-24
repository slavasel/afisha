import { RECIEVE_AFISHAS, REQUEST_AFISHAS, HOVER_ITEM } from '../actions'

const initialState = {
	afishas: {}
}

const afisha = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_AFISHAS:
			return Object.assign({}, state, {
				afishas: {}
			});

		case RECIEVE_AFISHAS:
			return Object.assign({}, state, {
				afishas: action.afishas
			});

		case HOVER_ITEM:
			let newState = Object.assign({}, state);
			newState.afishas[action.id].hovered = true;

			return newState;

		default:
			return state
	}
}

export default afisha