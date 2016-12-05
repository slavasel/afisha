import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
	render() {
		return (
			<div class="AppTop">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<div class="AppTop-FavCounter">
						<Link to="/favorites">
							<span class="icon icon-white"></span>
						</Link>
						<span class="AppTop-FavCounterValue">{this.props.favCounter}</span>
					</div>

					<Link className="navbar-brand" to="/">{this.props.projectName}</Link>
					<div id="navbar" class="navbar-collapse collapse">
				</div>


					{/*<form class="navbar-form navbar-right">
						<div class="form-group">
							<input type="text" placeholder="Email" class="form-control" />
						</div>
						<div class="form-group">
							<input type="password" placeholder="Password" class="form-control" />
						</div>
						<button type="submit" class="btn btn-success">Sign in</button>
					</form>*/}
				</div>
			</div>
		)
	}
}

module.exports = Header;