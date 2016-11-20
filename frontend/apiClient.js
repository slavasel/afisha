import fetch from 'isomorphic-fetch';

module.exports = {
	search: function () {
		fetch('http://localhost:8888/api')
			.then((response) => response.json())
			.then(function(res) {
				console.log(res);
			});
	}

}