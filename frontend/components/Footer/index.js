import React from 'react';

class Footer extends React.Component {
	render() {
		let year = new Date().getFullYear();

		return (
			<footer>
				<p>© {year} {this.props.projectName}.</p>
			</footer>
		)
	}
}

module.exports = Footer;