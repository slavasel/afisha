import React from 'react';
import { connect } from 'react-redux'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import LastResults from '../../components/LastResults'
import MiniMap from '../../components/MiniMap'
import { fetchAfishaById,
		  hoverItem, hoverOutItem,
		  deleteItemFromFavorites
} from '../../actions/afisha_actions.js'
import { getFavCount, decreaseFavCount } from '../../actions/fav_counter_actions.js'
import localStorageHandler from '../../utils/local_storage.js';
import globalConfig from '../../globalConfig.json';

import '../../styles/favorites.scss'

class Favorites extends React.Component {
	constructor() {
		super();

		this.state = {
			ids: '',
			startIndex: 0,
			limit: 3
		};

		if (!window.memberId) {
			this.state.ids = localStorageHandler.getFavorites().join(',');
		}
	}

	componentDidMount() {
		const {dispatch} = this.props;
		dispatch(getFavCount());

		if (this.state.ids) {
			dispatch(fetchAfishaById(this.state.ids,
				{
					startIndex: this.state.startIndex,
					count: this.state.limit
				}
			));
		}

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

	unsaveItem(id) {
		const { dispatch } = this.props;
		dispatch(deleteItemFromFavorites(id));
		dispatch(decreaseFavCount());
		this.forceUpdate();
	}

	goNextPage() {
		const { dispatch } = this.props;
		dispatch(fetchAfishaById(this.state.ids,
			{
				startIndex: this.state.startIndex += this.state.limit,
				count: this.state.limit
			}
		));
	}

	goPrevPage() {
		const { dispatch } = this.props;
		dispatch(fetchAfishaById(this.state.ids,
			{
				startIndex: this.state.startIndex -= this.state.limit,
				count: this.state.limit
			}
		));
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
						{this.state.ids
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
							: (<span>К сожалению, у Вас нет сохраненных мероприятий/заведений.</span>)
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

const FavoritesContainer = connect(
	mapStateToProps
)(Favorites)

module.exports = FavoritesContainer;