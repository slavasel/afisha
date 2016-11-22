export const REQUEST_AFISHAS = 'REQUEST_AFISHAS'
function requestAfishas() {
	return {
		type: REQUEST_AFISHAS
	}
}

export const RECIEVE_AFISHAS = 'RECIEVE_AFISHAS'
const recieveAfishas = (json) => {
	return {
		type: RECIEVE_AFISHAS,
		afishas: json,
		receivedAt: Date.now()
	}
}

export function fetchAfishas() {
	return function (dispatch) {
		dispatch(requestAfishas())

		return fetch('/api/afisha/search/')
			.then(response => response.json())
			.then(json =>
				dispatch(recieveAfishas(json))
			)
	}
}