import React from 'react';
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Jumbotron from '../../components/Jumbotron'
import LastResults from '../../components/LastResults'
import MiniMap from '../../components/MiniMap'
import { fetchAfishas } from '../../actions'
import globalConfig from '../../globalConfig.json';

class Landing extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchAfishas(3));
	}

	render() {
		return (
			<div>
				<nav class="navbar navbar-inverse navbar-fixed-top">
					<div class="container">
						<Header projectName={globalConfig.projectName} />
					</div>
				</nav>

				<Jumbotron />

				<div class="container">
					<div class= "main col-xs-7">
						<LastResults results={this.props.afishas}/>
					</div>

					<div class="sidebar col-xs-5">
						<MiniMap />
					</div>
				</div>

				<hr />

				<Footer projectName={globalConfig.projectName}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		afishas: state.afisha.afishas,
	}
};

const LandingContainer = connect(
	mapStateToProps
)(Landing)

module.exports = LandingContainer;