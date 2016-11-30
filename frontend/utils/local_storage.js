module.exports = {
	addToSaved: (id) => {
		let savedAfishas = localStorage.getItem('savedAfishas')
			? JSON.parse(localStorage.getItem('savedAfishas'))
			: [];

		savedAfishas.push(id);

		localStorage.setItem('savedAfishas', JSON.stringify(savedAfishas));
	},

	removeFromSaved: (id) => {
		let savedAfishas = localStorage.getItem('savedAfishas')
			? JSON.parse(localStorage.getItem('savedAfishas'))
			: [];

		if (!savedAfishas.length) {
			return false;
		}

		savedAfishas.splice(savedAfishas.indexOf(id), 1);

		localStorage.setItem('savedAfishas', JSON.stringify(savedAfishas));
	},

	prepareFavoriteState(json) {
		const savedAfishas = localStorage.getItem('savedAfishas')
			? JSON.parse(localStorage.getItem('savedAfishas'))
			: [];

		if (!savedAfishas.length) {
			return json;
		}

		Object.keys(json).map(idx => {
			savedAfishas.map(item => {
				if (item === idx) {
					json[idx].saved = true;
				}
			})
		});

		return json;
	}
}