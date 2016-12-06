import { RECIEVE_AFISHAS, REQUEST_AFISHAS,
	HOVER_ITEM, HOVER_OUT_ITEM,
	REQUEST_AFISHA, RECIEVE_AFISHA,
	SAVE_ITEM, UNSAVE_ITEM, DELETE_ITEM} from '../actions/afisha_actions.js'
import update from 'react-addons-update';

const initialState = {
	afishas: {}
}

const afisha = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_AFISHAS:
			return update(state, { $set: {
				afishas: {}
			} });

		case RECIEVE_AFISHAS:
			return update(state, { $set: {
				afishas: action.afishas,
				totalResults: action.totalResults
			} });

		case HOVER_ITEM:
			return update(state, { afishas: {
				[action.id]: { $merge: { hovered: true } }
			} });

		case HOVER_OUT_ITEM:
			return update(state, { afishas: {
				[action.id]: { $merge: { hovered: false } }
			} });

		case SAVE_ITEM:
			return update(state, { afishas: {
				[action.id]: { $merge: { saved: true } }
			} });

		case UNSAVE_ITEM:
			return update(state, { afishas: {
				[action.id]: { $merge: { saved: false } }
			} });

		case DELETE_ITEM:
			let newDeleteState = Object.assign({}, state);
			delete newDeleteState.afishas[action.id];

			return newDeleteState;

		default:
			return state
	}
}

export default afisha