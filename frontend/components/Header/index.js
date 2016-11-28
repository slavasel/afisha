import React from 'react';
import { Link } from 'react-router'

class Header extends React.Component {
	render() {
		return (
			<div>
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<Link className="navbar-brand" to="/">{this.props.projectName}</Link>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<form class="navbar-form navbar-right">
						<div class="form-group">
							<input type="text" placeholder="Email" class="form-control" />
						</div>
						<div class="form-group">
							<input type="password" placeholder="Password" class="form-control" />
						</div>
						<button type="submit" class="btn btn-success">Sign in</button>
					</form>
				</div>
			</div>
		)
	}
}

module.exports = Header;