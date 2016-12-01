import { GET_FAV_COUNT, INCREASE_FAV_COUNT, DECREASE_FAV_COUNT } from '../actions/fav_counter_actions.js'

const initialState = {
	counter: ''
}

const afisha = (state = initialState, action) => {
	switch (action.type) {
		case GET_FAV_COUNT:
			return Object.assign({}, state, {
				counter: action.count > 0 ? action.count : ''
			});

		case INCREASE_FAV_COUNT:
			return Object.assign({}, state, {
				counter: parseInt(state.counter + 1)
			});

		case DECREASE_FAV_COUNT:
			return Object.assign({}, state, {
				counter: (state.counter - 1) > 0 ? parseInt(state.counter - 1) : ''
			});

		default:
			return state
	}
}

export default afisha