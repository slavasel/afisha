import React from 'react';

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
						<div key={`col-${i}`} class="col-md-4">
							<h2 key={`event-name-${i}`}>{result.name}</h2>
							<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
								mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
								magna mollis euismod. Donec sed odio dui. </p>
							<p><a key={`event-action-${i}`} class="btn btn-default" href="#" role="button">View details »</a></p>
						</div>
					)
				})}
			</div>
		);
	}
}

module.exports = LastResults;