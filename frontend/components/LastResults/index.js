import React from 'react';
import ResultCard from '../ResultCard';

class LastResults extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		if (!this.props.results) {
			return false;
		}

		return (
			<div class="row">
				{Object.keys(this.props.results).map((idx) => {
						return (
							<ResultCard result={this.props.results[idx]} key={idx} index={idx} onItemHover={this.props.onItemHover} />
						)
					})
				}
			</div>
		);
	}
}

module.exports = LastResults;