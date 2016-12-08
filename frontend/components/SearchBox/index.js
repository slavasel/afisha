import React from 'react';
import { Link } from 'react-router'
import DateRange from '../../components/DateRange'

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			showAdditional: false,
		}
	}

	toggleSearch() {
		this.setState({showAdditional: !this.state.showAdditional});
	}

	render() {
		return (
			<div class="AppSearch AppContainer container">
				<form>
					<input id="search" class="SearchLine" type="text" placeholder='Все события и места'/>
					<button className="SearchButton btn btn-success">Искать</button>

					{this.state.showAdditional
						? (
						<div className="AppSearch-Additional">
							<DateRange />
						</div>
						)
						: null
					}

					<div className="AppSearch-ToggleSearch clear">
						<a href="javascript:void(0);" onClick={this.toggleSearch.bind(this)}>
							{this.state.showAdditional ? 'Свернуть' : 'Расширенный поиск' }
						</a>
					</div>
				</form>
			</div>
		)
	}
}

module.exports = Header;