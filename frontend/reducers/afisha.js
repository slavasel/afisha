import { RECIEVE_AFISHAS, REQUEST_AFISHAS, HOVER_ITEM, HOVER_OUT_ITEM } from '../actions'

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
			let newHoverState = Object.assign({}, state);
			newHoverState.afishas[action.id].hovered = true;

			return newHoverState;

		case HOVER_OUT_ITEM:
			let newHoverOutState = Object.assign({}, state);
			newHoverOutState.afishas[action.id].hovered = false;

			return newHoverOutState;

		default:
			return state
	}
}

export default afisha