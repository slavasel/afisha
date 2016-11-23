import React from 'react';

class Test extends React.Component {
	render() {
		let year = new Date().getFullYear();

		return (
			<footer>
				<p>© {year} lalka.</p>
			</footer>
		)
	}
}

module.exports = Test;