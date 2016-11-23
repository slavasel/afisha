import React from 'react';
import ResultCard from '../ResultCard';

class LastResults extends React.Component {
	constructor() {
		super();
	}

	render() {
		if (!this.props.results) {
			return false;
		}

		return (
			<div class="row">
				{this.props.results.map((result, i) => {
					return (
						<ResultCard result={result} key={i} index={i} />
					)
				})}
			</div>
		);
	}
}

module.exports = LastResults;