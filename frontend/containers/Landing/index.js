import React from 'react';
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Jumbotron from '../../components/Jumbotron'
import SearchBox from '../../components/SearchBox'
import LastResults from '../../components/LastResults'
import { fetchAfishas,
		  saveItemToFavorites, unsaveItemFromFavorites
} from '../../actions/afisha_actions.js'
import { getFavCount, increaseFavCount, decreaseFavCount } from '../../actions/fav_counter_actions.js'
import globalConfig from '../../globalConfig.json';

import '../../styles/landing.scss'

class Landing extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(fetchAfishas({count: 3, nearest: true}));
		dispatch(getFavCount());
	}

	saveItem(id) {
		const { dispatch } = this.props;
		dispatch(saveItemToFavorites(id));
		dispatch(increaseFavCount());
		this.forceUpdate();
	}

	unsaveItem(id) {
		const { dispatch } = this.props;
		dispatch(unsaveItemFromFavorites(id));
		dispatch(decreaseFavCount());
		this.forceUpdate();
	}

	render() {
		return (
			<div>
				<nav class="navbar navbar-inverse navbar-fixed-top">
					<div class="AppContainer container">
						<Header
							favCounter={this.props.fav_counter}
							projectName={globalConfig.projectName} />
					</div>
				</nav>

				<Jumbotron />

				<SearchBox />

				<div class="container AppContainer AppBody">
					<div class= "main AppBody-Left">
						<h3 className="HeadingH3">Ближайшие мероприятия</h3>
						<LastResults onItemHover={(id) => {}}
						             onItemOut={(id) => {}}
						             saveItem={(id) => this.saveItem.bind(this)(id)}
						             unsaveItem={(id) => this.unsaveItem.bind(this)(id)}
						             results={this.props.afishas}
						             layout="Vertical"
						/>
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
		fav_counter: state.fav_counter.counter,
	}
};

const LandingContainer = connect(
	mapStateToProps
)(Landing)

module.exports = LandingContainer;