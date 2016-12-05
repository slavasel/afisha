import { RECIEVE_AFISHAS, REQUEST_AFISHAS,
	HOVER_ITEM, HOVER_OUT_ITEM,
	REQUEST_AFISHA, RECIEVE_AFISHA,
	SAVE_ITEM, UNSAVE_ITEM, DELETE_ITEM} from '../actions/afisha_actions.js'

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
				afishas: action.afishas,
				totalResults: action.totalResults
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
			return Object.assign({}, state);

		case RECIEVE_AFISHA:
			let updateAfishaState = Object.assign({}, state, { afishas: action.afisha, totalResults: action.totalResults });

			return updateAfishaState;

		case SAVE_ITEM:
			let newSaveState = Object.assign({}, state);
			newSaveState.afishas[action.id].saved = true;

			return newSaveState;

		case UNSAVE_ITEM:
			let newUnsaveState = Object.assign({}, state);
			newUnsaveState.afishas[action.id].saved = false;

			return newUnsaveState;

		case DELETE_ITEM:
			let newDeleteState = Object.assign({}, state);
			delete newDeleteState.afishas[action.id];

			return newDeleteState;

		default:
			return state
	}
}

export default afisha