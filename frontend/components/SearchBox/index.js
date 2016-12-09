import React from 'react';
import { browserHistory } from 'react-router'
import update from 'react-addons-update';
import DateRange from '../../components/DateRange'
import linkBuilder from '../../utils/linkBuilder'

class SearchBox extends React.Component {
	constructor() {
		super();
		this.state = {
			showAdditional: false,
			formData: {}
		}
	}

	toggleSearch() {
		this.setState({showAdditional: !this.state.showAdditional});
	}

	handleChange(event, data) {
		let updatedFormData = this.state.formData;
		if (event) {
			const fieldName = event.target.name;
			const fieldValue = event.target.value;
			updatedFormData = update(this.state.formData, {$merge: {[fieldName]: fieldValue} });
		} else {
			updatedFormData = update(this.state.formData, {$merge: data});
		}

		this.setState({formData: updatedFormData});
	}

	updateLink(event) {
		event.preventDefault();
		const searchLink = '/search' + linkBuilder.createLinkFromParams(this.state.formData);
		browserHistory.push(searchLink);
	}

	render() {
		return (
			<div class="AppSearch AppContainer container">
				<form>
					<input
						id="search"
						name="search"
						class="SearchLine"
						type="text"
						placeholder='Все события и места'
					    onChange={this.handleChange.bind(this)}
					    defaultValue={this.state.formData.search}
					/>

					<input type="submit"
					      className="SearchButton btn btn-success"
					      onClick={(event) => this.updateLink.bind(this)(event)}
					      value="Искать"
					/>

					{this.state.showAdditional
						? (
						<div className="AppSearch-Additional">
							<DateRange
								onChange={(data) => this.handleChange.bind(this)(null, data)}
							    timeData={this.state.formData.startDate}
							/>
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

module.exports = SearchBox;