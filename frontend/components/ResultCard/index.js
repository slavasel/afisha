import React from 'react';
import { Link } from 'react-router'

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
			     onMouseEnter={() => itemHover(this.props.result._id)}
			     onMouseLeave={() => itemOut(this.props.result._id)}
			>
				<div class="HorizontalCard-Image">
					<img src="/static/images/event.jpg" />
				</div>

				<h2 class="HorizontalCard-Title"
				    key={`event-name-${this.props.index}`}
				>
					{this.props.result.name}
				</h2>

				<p>Место: "{this.props.result.place}"</p>

				<p class="HorizontalCard-Footer">
					<Link to={`/afisha/${this.props.result._id}`}
					      key={`event-action-${this.props.index}`}
					      className="btn btn-default"
					      role="button"
					>Узнать больше</Link>
				</p>
			</div>
		);
	}
}

module.exports = ResultCard;