import { RECIEVE_AFISHAS, REQUEST_AFISHAS,
	HOVER_ITEM, HOVER_OUT_ITEM,
	REQUEST_AFISHA, RECIEVE_AFISHA,
	AFISHA_UPDATE_PROPS } from '../actions'

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

		case REQUEST_AFISHA:
			return state;

		case RECIEVE_AFISHA:
			let updateAfishaState = Object.assign({}, state, { afishas: action.afisha });

			return updateAfishaState;

		default:
			return state
	}
}

export default afisha