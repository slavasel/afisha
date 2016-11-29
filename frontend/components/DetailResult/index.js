import React from 'react';

class DetailResult extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<p>{this.props.result.name}</p>
			</div>
		)
	}
}

module.exports = DetailResult;