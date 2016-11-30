import React from 'react';
import { Link } from 'react-router'

class ResultCard extends React.Component {
	constructor() {
		super();
	}

	render() {
		const itemHover = (id) => {
			this.props.onItemHover(id);
		};

		const itemOut = (id) => {
			this.props.onItemOut(id);
		};

		const saveItem = (id) => {
			this.props.saveItem(id);
		};

		const unsaveItem = (id) => {
			this.props.unsaveItem(id);
		};

		return (
			<div key={`col-${this.props.index}`}
			     class="HorizontalCard"
			     onMouseEnter={() => itemHover(this.props.result._id)}
			     onMouseLeave={() => itemOut(this.props.result._id)}
			>
				<Link to={`/afisha/${this.props.result._id}`}
				      key={`event-action-${this.props.index}`}
				      className="HorizontalCard-Link"
				>&nbsp;</Link>

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
					<a href="javascript:void(0);"
					      key={`event-action-${this.props.index}`}
					      className={"icon-save" + (this.props.result.saved ? " saved" : "")}
					      role="button"
					      onClick={() => !this.props.result.saved
						      ? saveItem(this.props.result._id)
						      : unsaveItem(this.props.result._id)}
					></a>
				</p>
			</div>
		);
	}
}

module.exports = ResultCard;