import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
	render() {
		return (
			<div class="AppSearch AppContainer container">
				<form>
					<input id="search" class="SearchLine" type="text" placeholder='Все события и места'/>
					<button className="SearchButton btn btn-success">Искать</button>
				</form>
			</div>
		)
	}
}

module.exports = Header;