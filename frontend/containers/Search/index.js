import React from 'react';
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LastResults from '../../components/LastResults'
import MiniMap from '../../components/MiniMap'
import { fetchAfishas,
	hoverItem, hoverOutItem,
	unsaveItemFromFavorites, saveItemToFavorites
} from '../../actions/afisha_actions.js'
import { getFavCount, decreaseFavCount } from '../../actions/fav_counter_actions.js'
import localStorageHandler from '../../utils/local_storage.js';
import globalConfig from '../../globalConfig.json';

import '../../styles/favorites.scss'

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			startIndex: 0,
			limit: 2,
			searchParams: props.routeParams
		};
	}

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(getFavCount());

		let queryParams = {
			startIndex: this.state.startIndex,
			count: this.state.limit
		};

		dispatch(fetchAfishas(queryParams, this.state.searchParams));
		window.addEventListener('scroll', this.scrollSidebar);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollSidebar);
	}

	onItemHover(id) {
		const { dispatch } = this.props;
		dispatch(hoverItem(id));
		this.forceUpdate();
	}

	onItemOut(id) {
		const { dispatch } = this.props;
		dispatch(hoverOutItem(id));
		this.forceUpdate();
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

	goNextPage() {
		const { dispatch } = this.props;
		let queryParams = {
			startIndex: this.state.startIndex += this.state.limit,
			count: this.state.limit
		};
		dispatch(fetchAfishas(queryParams, this.state.searchParams));
	}

	goPrevPage() {
		const { dispatch } = this.props;
		let queryParams = {
			startIndex: this.state.startIndex -= this.state.limit,
			count: this.state.limit
		};
		dispatch(fetchAfishas(queryParams, this.state.searchParams));
	}

	scrollSidebar(event) {
		const miniMap = document.getElementById('miniMap'),
			results = document.getElementById('results'),
			maxScroll = results.offsetHeight + results.offsetTop - miniMap.offsetHeight,
			staticHeaderMargin = 70;

		let scrollTop = event.srcElement.body.scrollTop;

		if (maxScroll > scrollTop + staticHeaderMargin) {
			miniMap.style.top = (scrollTop + staticHeaderMargin) + 'px';
			miniMap.style.position = 'absolute';
		}
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

				<div class="marginHeader"></div>
				<div class="container AppContainer AppBody">
					<div class= "main AppBody-Left">
						{Object.keys(this.props.afishas).length
							? (<LastResults onItemHover={(id) => this.onItemHover.bind(this)(id)}
							                onItemOut={(id) => this.onItemOut.bind(this)(id)}
							                saveItem={(id) => this.saveItem.bind(this)(id)}
							                unsaveItem={(id) => this.unsaveItem.bind(this)(id)}
							                pagination={{
								                startIndex: this.state.startIndex,
								                limit: this.state.limit,
								                totalResults: this.props.totalResults,
								                goNextPage: this.goNextPage.bind(this),
								                goPrevPage: this.goPrevPage.bind(this)
							                }}
							                results={this.props.afishas}
							                layout="Horizontal"
						/>)
							: (<span>К сожалению, поиск по заданным параметрам не дал результатов.</span>)
						}
					</div>

					<div class="sidebar AppSidebar">
						<MiniMap results={this.props.afishas} />
					</div>
				</div>

				<Footer projectName={globalConfig.projectName} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		afishas: state.afisha.afishas,
		totalResults: state.afisha.totalResults,
		fav_counter: state.fav_counter.counter,
	}
};

const SearchContainer = connect(
	mapStateToProps
)(Search)

module.exports = SearchContainer;