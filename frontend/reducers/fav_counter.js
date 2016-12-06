import { GET_FAV_COUNT, INCREASE_FAV_COUNT, DECREASE_FAV_COUNT } from '../actions/fav_counter_actions.js'
import update from 'react-addons-update';

const initialState = {
	counter: ''
}

const afisha = (state = initialState, action) => {
	switch (action.type) {
		case GET_FAV_COUNT:
			return update(state, { $set: { counter: action.count > 0 ? action.count : ''} });

		case INCREASE_FAV_COUNT:
			return update(state, { $set: { counter: parseInt(state.counter + 1) } });

		case DECREASE_FAV_COUNT:
			return update(state, { $set: { counter: (state.counter - 1) > 0 ? parseInt(state.counter - 1) : '' } });

		default:
			return state
	}
}

export default afisha