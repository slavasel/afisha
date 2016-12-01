import React from 'react';
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { fetchAfishaById } from '../../actions/afisha_actions.js'
import globalConfig from '../../globalConfig.json';
import DetailResult from '../../components/DetailResult'

import '../../styles/detail.scss'

class Detail extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.routeParams.id
		}
	}

	componentDidMount() {
		if (!this.props.afishas[this.state.id]) {
			console.log('New afisha render');

			const { dispatch } = this.props;
			dispatch(fetchAfishaById(this.state.id));
		}
	}

	render() {
		const item = this.props.afishas[this.state.id];
		if (!item) {
			return false;
		}

		return (
			<div>
				<nav class="navbar navbar-inverse navbar-fixed-top">
					<div class="AppContainer container">
						<Header projectName={globalConfig.projectName} />
					</div>
				</nav>

				<div class="container AppContainer AppBody">
					<div class= "main AppBody-Left">
						<DetailResult result={item}/>
					</div>

					<div class="sidebar AppSidebar">

					</div>
				</div>

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

const DetailContainer = connect(
	mapStateToProps
)(Detail)

module.exports = DetailContainer;