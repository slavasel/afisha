import React from 'react';

class ResultCard extends React.Component {
	constructor() {
		super();
	}

	render() {
		const itemHover = (id) => {
			this.props.onItemHover(id);
		}

		return (
			<div onMouseEnter={() => itemHover(this.props.result._id)} key={`col-${this.props.index}`} class="col-md-4">
				<h2 key={`event-name-${this.props.index}`}>{this.props.result.name}</h2>
				<p>Мероприятие пройдет в "{this.props.result.place}"</p>
				<p><a key={`event-action-${this.props.index}`} class="btn btn-default" href="#" role="button">Узнать больше</a></p>
			</div>
		);
	}
}

module.exports = ResultCard;