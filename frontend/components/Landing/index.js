import React from 'react';
import { connect } from 'react-redux'
import Header from '../Header'
import Footer from '../Footer'
import LastResults from '../LastResults'
import { fetchAfishas } from '../../actions'
import globalConfig from '../../globalConfig.json';

class Landing extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchAfishas());
	}

	render() {
		return (
			<div>
				<nav class="navbar navbar-inverse navbar-fixed-top">
					<div class="container">
						<Header projectName={globalConfig.projectName} />
					</div>
				</nav>

				<div class="jumbotron">
					<div class="container">
						<h1>Hello, world!</h1>
						<p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
						<p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
					</div>
				</div>

				<div class="container">
					<LastResults results={this.props.afishas}/>

					<hr />

					<Footer projectName={globalConfig.projectName}/>
				</div>
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