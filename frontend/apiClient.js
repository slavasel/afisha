import fetch from 'isomorphic-fetch';

module.exports = {
	search: function () {
		fetch('/api/afisha/1')
			.then((response) => response.json())
			.then(function(res) {
				console.log(res);
			});
	}

}