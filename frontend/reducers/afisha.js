import { RECIEVE_AFISHAS, REQUEST_AFISHAS } from '../actions'

const initialState = {
	afishas: []
}

const afisha = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_AFISHAS:
			return Object.assign({}, state, {
				afishas: []
			})

		case RECIEVE_AFISHAS:
			return Object.assign({}, state, {
				afishas: action.afishas
			})

		default:
			return state
	}
}

export default afisha