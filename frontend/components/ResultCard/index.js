import React from 'react';
import HorizontalCard from './HorizontalCard'
import VerticalCard from './VerticalCard'

const cardMap = {
	'Horizontal': HorizontalCard,
	'Vertical': VerticalCard
};

class ResultCard extends React.Component {
	constructor() {
		super();
	}

	render() {
		const CardComponent = cardMap[this.props.layout];
		return (
			<CardComponent {...this.props}/>
		);
	}
}

module.exports = ResultCard;