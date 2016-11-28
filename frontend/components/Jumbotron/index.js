import React from 'react';

class Jumbotron extends React.Component {
	render() {
		return (
			<div class="jumbotron container AppContainer AppHeader">
				<p class="AppHeader-Greeting">Афон. Все гарячие мероприятия в городе {'<3'}</p>
				{/*<p><a class="btn btn-primary btn-lg" href="#" role="button">О нас</a></p> */}
			</div>
		)
	}
}

module.exports = Jumbotron;