import React from 'react';

class ResultCard extends React.Component {
	constructor() {
		super();
	}

	render() {
		const itemHover = (id) => {
			this.props.onItemHover(id);
		}

		const itemOut = (id) => {
			this.props.onItemOut(id);
		}

		return (
			<div key={`col-${this.props.index}`}
			     class="HorizontalCard"
			     onMouseOver={() => itemHover(this.props.result._id)}
			     onMouseOut={() => itemOut(this.props.result._id)}
			>
				<h2 class="HorizontalCard-Title"
				    key={`event-name-${this.props.index}`}
				>
					{this.props.result.name}
				</h2>

				<p>Место: "{this.props.result.place}"</p>

				<p class="HorizontalCard-Footer">
					<a key={`event-action-${this.props.index}`}
					   class="btn btn-default"
					   href="#"
					   role="button"
					>
						Узнать больше
					</a>
				</p>
			</div>
		);
	}
}

module.exports = ResultCard;