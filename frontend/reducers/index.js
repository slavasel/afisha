import { combineReducers } from 'redux'
import afisha from './afisha'
import fav_counter from './fav_counter'

const afishaApp = combineReducers({
	afisha,
	fav_counter
})

export default afishaApp