import React from 'react';

class Jumbotron extends React.Component {
	render() {
		return (
			<div class="jumbotron">
				<div class="container">
					<h1>Вас приветствует Афон</h1>
					<p>Все гарячие мероприятия в городе. Изучите и расшарьте.</p>
					<p><a class="btn btn-primary btn-lg" href="#" role="button">О нас</a></p>
				</div>
			</div>
		)
	}
}

module.exports = Jumbotron;