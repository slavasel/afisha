import React from 'react';

class Jumbotron extends React.Component {
	render() {
		return (
			<div class="jumbotron container AppContainer AppHeader">
				<div class="AppHeader-Greeting">
					<h1>Афон: Все самое актуальное и горячее</h1>
					<div class="AppHeader-hearts">
						<span class="icon icon-save saved"></span>
						<span class="icon icon-save saved"></span>
						<span class="icon icon-save saved"></span>
					</div>
				</div>
				{/*<p><a class="btn btn-primary btn-lg" href="#" role="button">О нас</a></p> */}
			</div>
		)
	}
}

module.exports = Jumbotron;