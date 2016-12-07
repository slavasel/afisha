import React from 'react';
import ResultCard from '../ResultCard';

class LastResults extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (!this.props.results) {
			return false;
		}

		return (
			<div class={"row Layout" + this.props.layout} id="results">
				{Object.keys(this.props.results).map((idx) => {
						return (
							<ResultCard result={this.props.results[idx]}
							            key={idx}
							            index={idx}
							            onItemHover={this.props.onItemHover}
							            onItemOut={this.props.onItemOut}
							            saveItem={this.props.saveItem}
							            unsaveItem={this.props.unsaveItem}
							            layout={this.props.layout}
							/>
						)
					})
				}
				{this.props.pagination && Object.keys(this.props.results).length > 0
					? this.renderPagination()
					: null
				}
			</div>
		);
	}

	renderPagination() {
		const pagination = this.props.pagination;
		const pagesCount = Math.ceil(pagination.totalResults / pagination.limit);
		const currentPage = Math.ceil((pagination.startIndex) / pagination.limit) + 1;
		return (
			<div className="AppPagination">
				{currentPage > 1
					? (
						<button className="AppPagination-button btn"
						        onClick={this.props.pagination.goPrevPage}
						>
							{'<<'}
						</button>
						)
					: null
				}

				Страница {currentPage} из {pagesCount}

				{currentPage !== pagesCount
					? (
					<button className="AppPagination-button btn"
					        onClick={this.props.pagination.goNextPage}
					>
						{'>>'}
					</button>
				)
					: null
				}
			</div>
		);
	}
}

module.exports = LastResults;